"use client";

import { useEffect, useState } from "react";
import { menuPool, type Ingredient } from "../data/menus";
import { sideDishPool, type SideDish } from "../data/sideDishes";

const days = ["月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日", "日曜日"];

const categoryOrder = ["肉・魚", "野菜", "卵・豆腐・乳製品", "調味料", "その他"];

export default function Home() {
  const [showResult, setShowResult] = useState(false);

  const [adultCount, setAdultCount] = useState(2);
  const [childCount, setChildCount] = useState(2);

  const [selectedDays, setSelectedDays] = useState<string[]>(days);
  const [includedDays, setIncludedDays] = useState<string[]>(days);
  const [checkedIngredients, setCheckedIngredients] = useState<string[]>([]);
  const [openCategories, setOpenCategories] = useState<string[]>(categoryOrder);

  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const [lockedDays, setLockedDays] = useState<string[]>([]);

  const [favoriteMenus, setFavoriteMenus] = useState<string[]>([]);
  const [preferFavorites, setPreferFavorites] = useState(false);

  const [showFavorites, setShowFavorites] = useState(false);
  const [pendingRemoveFavorites, setPendingRemoveFavorites] = useState<string[]>([]);

  const [includeSideDishes, setIncludeSideDishes] = useState(true);

  const [settingsLoaded, setSettingsLoaded] = useState(false);

  const [avoidLastMenus, setAvoidLastMenus] = useState(true);
  const [lastGeneratedMenus, setLastGeneratedMenus] = useState<string[]>([]);

  const [generatedMenus, setGeneratedMenus] = useState<
    {
      day: string;
      menu: string;
      ingredients: Ingredient[];
      sideDishes: SideDish[];
    }[]
  >([]);

  const [menuHistory, setMenuHistory] = useState<
    {
      createdAt: string;
      menus: string[];
    }[]
  >([]);

  const [showHistory, setShowHistory] = useState(false);

  const servingCount = adultCount + childCount * 0.5;

  useEffect(() => {
    const savedFavorites = localStorage.getItem("favoriteMenus");

    if (savedFavorites) {
      setFavoriteMenus(JSON.parse(savedFavorites));
    }
  }, []);

  /**
   * 初回読み込み時にローカルストレージから設定を復元
   */
  useEffect(() => {
    const saved = localStorage.getItem("konshu-settings");
    const savedAvoidLastMenus = localStorage.getItem("avoidLastMenus");
    const savedLastGeneratedMenus = localStorage.getItem("lastGeneratedMenus");

    const savedHistory =
      localStorage.getItem("menuHistory");

    if (savedHistory) {
      setMenuHistory(JSON.parse(savedHistory));
    }

    if (savedAvoidLastMenus !== null) {
      setAvoidLastMenus(JSON.parse(savedAvoidLastMenus));
    }

    if (savedLastGeneratedMenus) {
      setLastGeneratedMenus(JSON.parse(savedLastGeneratedMenus));
    }

    if (saved) {
      const settings = JSON.parse(saved);

      setAdultCount(settings.adultCount ?? 2);
      setChildCount(settings.childCount ?? 2);

      setSelectedDays(settings.selectedDays ?? days);
      setSelectedTags(settings.selectedTags ?? []);

      setIncludeSideDishes(
        settings.includeSideDishes ?? true
      );

      setPreferFavorites(
        settings.preferFavorites ?? false
      );
    }

    setSettingsLoaded(true);
  }, []);

  /**
   * 設定変更をローカルストレージに保存
   */
  useEffect(() => {


    if (!settingsLoaded) return;

    localStorage.setItem(
      "konshu-settings",
      JSON.stringify({
        adultCount,
        childCount,
        selectedDays,
        selectedTags,
        includeSideDishes,
        preferFavorites,
      })
    );
    localStorage.setItem(
      "avoidLastMenus",
      JSON.stringify(avoidLastMenus)
    );
  }, [
    settingsLoaded,
    adultCount,
    childCount,
    selectedDays,
    selectedTags,
    includeSideDishes,
    preferFavorites,
    avoidLastMenus,
  ]);

  /**
   * お気に入り切替関数
   * @param menuName 
   */
  const toggleFavoriteMenu = (menuName: string) => {
    setFavoriteMenus((prev) => {
      const nextFavorites = prev.includes(menuName)
        ? prev.filter((item) => item !== menuName)
        : [...prev, menuName];

      localStorage.setItem("favoriteMenus", JSON.stringify(nextFavorites));

      return nextFavorites;
    });
  };

  const toggleDay = (day: string) => {
    setSelectedDays((prev) =>
      prev.includes(day)
        ? prev.filter((selectedDay) => selectedDay !== day)
        : [...prev, day]
    );

    setIncludedDays((prev) =>
      prev.includes(day)
        ? prev.filter((includedDay) => includedDay !== day)
        : [...prev, day]
    );
  };

  const toggleIncludedDay = (day: string) => {
    setIncludedDays((prev) =>
      prev.includes(day)
        ? prev.filter((includedDay) => includedDay !== day)
        : [...prev, day]
    );
  };

  const toggleIngredient = (ingredientName: string) => {
    setCheckedIngredients((prev) =>
      prev.includes(ingredientName)
        ? prev.filter((item) => item !== ingredientName)
        : [...prev, ingredientName]
    );
  };

  const toggleCategory = (category: string) => {
    setOpenCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };

  const toggleLockedDay = (day: string) => {
    setLockedDays((prev) =>
      prev.includes(day)
        ? prev.filter((item) => item !== day)
        : [...prev, day]
    );
  };

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag)
        ? prev.filter((item) => item !== tag)
        : [...prev, tag]
    );
  };

  const pickSideDishes = (needs: string[]) => {
    const matchedSideDishes = sideDishPool.filter((sideDish) =>
      sideDish.tags.some((tag) => needs.includes(tag))
    );

    const candidates =
      matchedSideDishes.length > 0 ? matchedSideDishes : sideDishPool;

    return [...candidates].sort(() => Math.random() - 0.5).slice(0, 2);
  };

  const pickRandomMenu = (excludeMenuNames: string[] = []) => {
    // 重視項目タグに一致するメニューを抽出
    const matchedMenus = menuPool.filter((menu) =>
      selectedTags.every((tag) => menu.tags.includes(tag))
    );

    // タグ一致メニューがあればそれをベースにする。なければ全メニュー
    const baseCandidates = matchedMenus.length > 0 ? matchedMenus : menuPool;

    // 前回献立をなるべく避ける
    const avoidMenus = avoidLastMenus ? lastGeneratedMenus : [];

    // 通常候補：今週すでに使った献立 + 前回献立を除外
    const normalCandidates = baseCandidates.filter(
      (menu) =>
        !excludeMenuNames.includes(menu.name) &&
        !avoidMenus.includes(menu.name)
    );

    // 前回献立を除外しすぎて候補がなくなった場合の保険
    const fallbackNormalCandidates = baseCandidates.filter(
      (menu) => !excludeMenuNames.includes(menu.name)
    );

    const usableNormalCandidates =
      normalCandidates.length > 0
        ? normalCandidates
        : fallbackNormalCandidates;

    // お気に入り候補
    const favoriteCandidates = usableNormalCandidates.filter((menu) =>
      favoriteMenus.includes(menu.name)
    );

    // お気に入り優先ONなら70%でお気に入りを使う
    const shouldUseFavorite =
      preferFavorites && favoriteCandidates.length > 0 && Math.random() < 0.7;

    const candidates = shouldUseFavorite
      ? favoriteCandidates
      : usableNormalCandidates;

    return candidates[Math.floor(Math.random() * candidates.length)];
  };

  const generateMenus = () => {
    const targetDays = days.filter((day) => selectedDays.includes(day));
    const usedMenuNames: string[] = [];

    const menus = targetDays.map((day) => {
      const selectedMenu = pickRandomMenu(usedMenuNames);
      usedMenuNames.push(selectedMenu.name);

      return {
        day,
        menu: selectedMenu.name,
        ingredients: selectedMenu.ingredients,
        sideDishes: includeSideDishes
          ? pickSideDishes(selectedMenu.sideDishNeeds)
          : [],
      };
    });

    const generatedMenuNames = menus.map((item) => item.menu);

    // 献立履歴に追加
    setGeneratedMenus(menus);
    setIncludedDays(targetDays);
    setCheckedIngredients([]);
    setLockedDays([]);
    setShowResult(true);
  };

  /**
   * 現在の献立を履歴に保存する 
   * @returns 
   */
  const saveCurrentMenusToHistory = () => {
    const menuNames = generatedMenus.map((item) => item.menu);

    if (menuNames.length === 0) {
      return;
    }

    const newHistory = [
      {
        createdAt: new Date().toISOString(),
        menus: menuNames,
      },
      ...menuHistory,
    ].slice(0, 10);

    setMenuHistory(newHistory);

    localStorage.setItem(
      "menuHistory",
      JSON.stringify(newHistory)
    );

    setLastGeneratedMenus(menuNames);

    localStorage.setItem(
      "lastGeneratedMenus",
      JSON.stringify(menuNames)
    );

    alert("今週の献立として保存しました！");
  };

  /**
   * 未確定だけ再抽選関数
   */
  const regenerateUnlockedMenus = () => {
    const usedMenuNames = generatedMenus
      .filter((item) => lockedDays.includes(item.day))
      .map((item) => item.menu);

    const menus = generatedMenus.map((item) => {
      if (lockedDays.includes(item.day)) {
        return item;
      }

      const selectedMenu = pickRandomMenu(usedMenuNames);
      usedMenuNames.push(selectedMenu.name);

      return {
        day: item.day,
        menu: selectedMenu.name,
        ingredients: selectedMenu.ingredients,
        sideDishes: includeSideDishes
          ? pickSideDishes(selectedMenu.sideDishNeeds)
          : [],
      };
    });

    setGeneratedMenus(menus);
    setCheckedIngredients([]);
  };

  const selectedMenus = generatedMenus;

  const shoppingList = selectedMenus
    .filter((item) => includedDays.includes(item.day))
    .flatMap((item) => [
      ...item.ingredients,
      ...item.sideDishes.flatMap((sideDish) => sideDish.ingredients ?? []),
    ])
    .reduce<Ingredient[]>((list, ingredient) => {
      const calculatedAmount = ingredient.amount * servingCount;

      const existingIngredient = list.find(
        (item) => item.name === ingredient.name && item.unit === ingredient.unit
      );

      if (existingIngredient) {
        existingIngredient.amount += calculatedAmount;
      } else {
        list.push({
          ...ingredient,
          amount: calculatedAmount,
        });
      }

      return list;
    }, []);

  const groupedShoppingList = categoryOrder
    .map((category) => ({
      category,
      ingredients: shoppingList.filter(
        (ingredient) => ingredient.category === category
      ),
    }))
    .filter((group) => group.ingredients.length > 0);

  const formatAmount = (amount: number, unit: string) => {
    const roundedAmount = Math.round(amount * 10) / 10;

    if (roundedAmount === 0.25) return `1/4${unit}`;
    if (roundedAmount === 0.5) return `1/2${unit}`;
    if (roundedAmount === 0.75) return `3/4${unit}`;

    return `${roundedAmount}${unit}`;
  };

  const makeShoppingListText = () => {
    return groupedShoppingList
      .map((group) => {
        const items = group.ingredients
          .map(
            (ingredient) =>
              `・${ingredient.name} ${formatAmount(
                ingredient.amount,
                ingredient.unit
              )}`
          )
          .join("\n");

        return `【${group.category}】\n${items}`;
      })
      .join("\n\n");
  };

  const copyShoppingList = async () => {
    await navigator.clipboard.writeText(makeShoppingListText());
    alert("買い物リストをコピーしました！");
  };

  const shareToLine = () => {
    const url = `https://line.me/R/msg/text/?${encodeURIComponent(
      makeShoppingListText()
    )}`;
    window.open(url, "_blank");
  };

  const togglePendingFavorite = (menuName: string) => {
    setPendingRemoveFavorites((prev) =>
      prev.includes(menuName)
        ? prev.filter((item) => item !== menuName)
        : [...prev, menuName]
    );
  };

  const saveFavoriteChanges = () => {
    const updatedFavorites = favoriteMenus.filter(
      (menuName) =>
        !pendingRemoveFavorites.includes(menuName)
    );

    setFavoriteMenus(updatedFavorites);

    localStorage.setItem(
      "favoriteMenus",
      JSON.stringify(updatedFavorites)
    );

    setPendingRemoveFavorites([]);
  };

  const deleteHistory = (index: number) => {
    const ok = confirm("この献立履歴を削除しますか？");

    if (!ok) return;

    const updatedHistory = menuHistory.filter((_, historyIndex) => historyIndex !== index);

    setMenuHistory(updatedHistory);

    localStorage.setItem(
      "menuHistory",
      JSON.stringify(updatedHistory)
    );
  };

  return (
    <main className="min-h-screen bg-gray-100 p-6 text-gray-900">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow p-6">
        <h1 className="text-3xl font-bold mb-2">
          🍳 今週の晩ご飯どうする？
        </h1>

        <p className="text-gray-600 mb-6">
          共働き子育て家庭の「月曜日から何作ろう…」を5分で終わらせる
        </p>

        <div className="mb-6">
          <h2 className="font-semibold mb-2">人数</h2>

          <div className="flex gap-4">
            <div>
              <label>大人</label>
              <input
                type="number"
                min={0}
                value={adultCount}
                onChange={(event) => setAdultCount(Number(event.target.value))}
                className="border rounded p-2 ml-2 w-20"
              />
            </div>

            <div>
              <label>子ども</label>
              <input
                type="number"
                min={0}
                value={childCount}
                onChange={(event) => setChildCount(Number(event.target.value))}
                className="border rounded p-2 ml-2 w-20"
              />
            </div>
          </div>

          <p className="text-sm text-gray-600 mt-2">
            子どもは0.5人前として計算します。現在：{servingCount}人前
          </p>
        </div>

        <div className="mb-6">
          <h2 className="font-semibold mb-2">作る曜日</h2>

          <div className="grid grid-cols-2 gap-2">
            {days.map((day) => (
              <label key={day} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectedDays.includes(day)}
                  onChange={() => toggleDay(day)}
                />
                <span>{day}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h2 className="font-semibold mb-2">重視項目</h2>

          <div className="grid grid-cols-2 gap-2">
            {["節約", "時短", "がっつり", "ダイエット", "子ども向け"].map(
              (item) => (
                <label key={item} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={selectedTags.includes(item)}
                    onChange={() => toggleTag(item)}
                  />
                  <span>{item}</span>
                </label>
              )
            )}
          </div>

          <label className="mt-4 flex items-center gap-2">
            <input
              type="checkbox"
              checked={includeSideDishes}
              onChange={(e) => {
                const checked = e.target.checked;
                setIncludeSideDishes(checked);

                setGeneratedMenus((prev) =>
                  prev.map((item) => {
                    if (checked) {
                      const menu = menuPool.find((menu) => menu.name === item.menu);

                      return {
                        ...item,
                        sideDishes: menu ? pickSideDishes(menu.sideDishNeeds) : [],
                      };
                    }

                    return {
                      ...item,
                      sideDishes: [],
                    };
                  })
                );

                setCheckedIngredients([]);
              }}
            />
            副菜を提案する
          </label>

          <label className="mt-4 flex items-center gap-2">
            <input
              type="checkbox"
              checked={avoidLastMenus}
              onChange={(e) => setAvoidLastMenus(e.target.checked)}
            />
            前回の献立をなるべく避ける
          </label>

          <label className="mt-4 flex items-center gap-2">
            <input
              type="checkbox"
              checked={preferFavorites}
              onChange={() => setPreferFavorites((prev) => !prev)}
            />
            <span>お気に入り献立を多めにする（★）</span>
          </label>
        </div>

        <div className="mt-4">
          <button
            type="button"
            onClick={() => setShowFavorites((prev) => !prev)}
            className="rounded bg-yellow-100 px-3 py-2 font-semibold"
          >
            ★ お気に入り献立 {favoriteMenus.length}件
            {showFavorites ? "（閉じる）" : "（表示）"}
          </button>
        </div>
        {showFavorites && (
          <div className="mt-3 rounded border p-3">
            <h3 className="mb-1 font-bold">お気に入り献立</h3>
            <p className="mb-2 text-sm text-gray-500">
              お気に入りにした献立は、優先抽選で出やすくなります。
            </p>

            {favoriteMenus.length === 0 ? (
              <p className="text-sm text-gray-500">
                お気に入りはまだありません
              </p>
            ) : (
              <div className="space-y-2">
                {favoriteMenus.map((menuName) => (
                  <div
                    key={menuName}
                    className={`flex items-center justify-between rounded p-2 ${pendingRemoveFavorites.includes(menuName)
                      ? "bg-gray-100 text-gray-400 line-through"
                      : ""
                      }`}
                  >
                    <span>{menuName}</span>

                    <button
                      type="button"
                      onClick={() => togglePendingFavorite(menuName)}
                      className="text-2xl"
                    >
                      {pendingRemoveFavorites.includes(menuName)
                        ? "☆"
                        : "★"}
                    </button>
                  </div>
                ))}
              </div>
            )}
            <div className="mt-4 flex gap-2">
              <button
                type="button"
                onClick={saveFavoriteChanges}
                disabled={pendingRemoveFavorites.length === 0}
                className={`rounded px-3 py-2 text-white ${pendingRemoveFavorites.length === 0
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-red-500 hover:bg-red-600"
                  }`}
              >
                変更を保存
              </button>

              <button
                type="button"
                onClick={() => setPendingRemoveFavorites([])}
                className="rounded bg-gray-300 px-3 py-2"
              >
                元に戻す
              </button>
            </div>
          </div>
        )}

        <button
          type="button"
          onClick={() =>
            setShowHistory((prev) => !prev)
          }
          className="rounded bg-green-100 px-3 py-2 font-semibold"
        >
          📚 献立履歴 {menuHistory.length}件
          {showHistory ? "（閉じる）" : "（表示）"}
        </button>

        {showHistory && (
          <div className="mt-3 rounded border p-3">
            <h3 className="mb-2 font-bold">
              献立履歴
            </h3>

            {menuHistory.map((history, index) => (
              <div
                key={index}
                className="mb-4 border-b pb-2"
              >
                <p className="font-semibold">
                  {new Date(
                    history.createdAt
                  ).toLocaleDateString("ja-JP")}
                </p>

                {history.menus.map((menu) => (
                  <p key={menu}>・{menu}</p>
                ))}
                <button
                  type="button"
                  onClick={() => deleteHistory(index)}
                  className="mt-2 rounded bg-gray-200 px-3 py-1 text-sm hover:bg-gray-300"
                >
                  この履歴を削除
                </button>
              </div>

            ))}
          </div>
        )}

        <button
          onClick={generateMenus}
          className="w-full bg-orange-500 text-white p-3 rounded font-bold hover:bg-orange-600"
        >
          今週の献立を作る
        </button>

        {showResult && (
          <div className="mt-8 border-t pt-6">
            <h2 className="text-2xl font-bold mb-4">今週の献立</h2>

            {selectedMenus.length === 0 ? (
              <p className="text-gray-600">作る曜日が選択されていません。</p>
            ) : (
              <div className="space-y-3 mb-6">
                {selectedMenus.map((item) => (
                  <div
                    key={item.day}
                    className={`flex items-center justify-between rounded-lg border p-3 ${lockedDays.includes(item.day) ? "border-blue-400 bg-blue-50" : ""
                      }`}
                  >
                    <div>
                      <p className="font-semibold">{item.day}</p>

                      <button
                        type="button"
                        onClick={() => toggleFavoriteMenu(item.menu)}
                        className="flex items-center gap-2 text-left"
                      >
                        <span className="font-bold">{item.menu}</span>
                        <span className="text-xl">
                          {favoriteMenus.includes(item.menu) ? "★" : "☆"}
                        </span>
                      </button>

                      <div className="text-sm text-gray-600">
                        {item.sideDishes.length > 0 && (
                          <p>
                            副菜：
                            {item.sideDishes.map((dish) => dish.name).join("、")}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-2">
                      <button
                        type="button"
                        onClick={() => toggleLockedDay(item.day)}
                        className={`rounded px-3 py-1 text-sm font-bold ${lockedDays.includes(item.day)
                          ? "bg-blue-600 text-white"
                          : "bg-gray-200 text-gray-700"
                          }`}
                      >
                        {lockedDays.includes(item.day) ? "キープ中" : "キープする"}
                      </button>

                      <label className="flex items-center gap-2 text-sm">
                        <input
                          type="checkbox"
                          checked={includedDays.includes(item.day)}
                          onChange={() => toggleIncludedDay(item.day)}
                        />
                        <span>買い物リストに含める</span>
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="mb-6">
              <button
                type="button"
                onClick={regenerateUnlockedMenus}
                className="w-full rounded bg-blue-500 p-3 font-bold text-white hover:bg-blue-600"
              >
                キープ中以外の曜日だけ再抽選する
              </button>
              <button
                type="button"
                onClick={saveCurrentMenusToHistory}
                className="mt-3 w-full rounded bg-green-600 p-3 font-bold text-white hover:bg-green-700"
              >
                今週の献立として保存する
              </button>
            </div>

            <h2 className="text-2xl font-bold mb-4">買い物リスト</h2>

            {groupedShoppingList.length === 0 ? (
              <p className="text-gray-600">
                買い物リストに含める献立がありません。
              </p>
            ) : (
              <div className="space-y-4">
                {groupedShoppingList.map((group) => {
                  const isOpen = openCategories.includes(group.category);

                  return (
                    <div key={group.category}>
                      <button
                        type="button"
                        onClick={() => toggleCategory(group.category)}
                        className="flex w-full items-center justify-between border-b pb-1 mb-2 font-bold"
                      >
                        <span>
                          {isOpen ? "▼" : "▶"} {group.category}
                        </span>
                        <span className="text-sm text-gray-500">
                          {group.ingredients.length}件
                        </span>
                      </button>

                      {isOpen && (
                        <ul className="space-y-2">
                          {group.ingredients.map((ingredient) => {
                            const isChecked = checkedIngredients.includes(
                              ingredient.name
                            );

                            return (
                              <li
                                key={`${ingredient.name}-${ingredient.unit}`}
                                className="list-none"
                              >
                                <label
                                  className={`flex items-center justify-between gap-4 rounded p-2 cursor-pointer ${isChecked
                                    ? "bg-gray-200 text-gray-500 line-through"
                                    : ""
                                    }`}
                                >
                                  <div className="flex items-center gap-2">
                                    <input
                                      type="checkbox"
                                      checked={isChecked}
                                      onChange={() =>
                                        toggleIngredient(ingredient.name)
                                      }
                                    />
                                    <span>{ingredient.name}</span>
                                  </div>

                                  <span className="font-semibold">
                                    {formatAmount(
                                      ingredient.amount,
                                      ingredient.unit
                                    )}
                                  </span>
                                </label>
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </div>
                  );
                })}

                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <button
                    onClick={copyShoppingList}
                    className="rounded bg-gray-800 p-3 font-bold text-white hover:bg-gray-900"
                  >
                    買い物リストをコピー
                  </button>

                  <button
                    onClick={shareToLine}
                    className="rounded bg-green-500 p-3 font-bold text-white hover:bg-green-600"
                  >
                    LINEで共有
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
}