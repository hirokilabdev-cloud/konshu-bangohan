"use client";

import { useState } from "react";

const days = ["月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日", "日曜日"];

type Ingredient = {
  name: string;
  category: string;
  amount: number;
  unit: string;
};

const categoryOrder = ["肉・魚", "野菜", "卵・豆腐・乳製品", "調味料", "その他"];

const sampleMenus: Record<string, { menu: string; ingredients: Ingredient[] }> = {
  月曜日: {
    menu: "親子丼",
    ingredients: [
      { name: "鶏もも肉", category: "肉・魚", amount: 150, unit: "g" },
      { name: "卵", category: "卵・豆腐・乳製品", amount: 1, unit: "個" },
      { name: "玉ねぎ", category: "野菜", amount: 0.5, unit: "個" },
      { name: "ご飯", category: "その他", amount: 0.5, unit: "合" },
    ],
  },
  火曜日: {
    menu: "豚の生姜焼き",
    ingredients: [
      { name: "豚肉", category: "肉・魚", amount: 150, unit: "g" },
      { name: "玉ねぎ", category: "野菜", amount: 0.5, unit: "個" },
      { name: "しょうが", category: "調味料", amount: 0.25, unit: "かけ" },
      { name: "キャベツ", category: "野菜", amount: 0.1, unit: "玉" },
    ],
  },
  水曜日: {
    menu: "鮭のホイル焼き",
    ingredients: [
      { name: "鮭", category: "肉・魚", amount: 1, unit: "切れ" },
      { name: "しめじ", category: "野菜", amount: 0.5, unit: "パック" },
      { name: "玉ねぎ", category: "野菜", amount: 0.5, unit: "個" },
      { name: "バター", category: "卵・豆腐・乳製品", amount: 10, unit: "g" },
    ],
  },
  木曜日: {
    menu: "麻婆豆腐",
    ingredients: [
      { name: "豆腐", category: "卵・豆腐・乳製品", amount: 0.5, unit: "丁" },
      { name: "ひき肉", category: "肉・魚", amount: 100, unit: "g" },
      { name: "長ねぎ", category: "野菜", amount: 0.5, unit: "本" },
      { name: "豆板醤", category: "調味料", amount: 0.25, unit: "個" },
    ],
  },
  金曜日: {
    menu: "ハンバーグ",
    ingredients: [
      { name: "合いびき肉", category: "肉・魚", amount: 150, unit: "g" },
      { name: "玉ねぎ", category: "野菜", amount: 0.5, unit: "個" },
      { name: "パン粉", category: "その他", amount: 0.25, unit: "袋" },
      { name: "卵", category: "卵・豆腐・乳製品", amount: 0.5, unit: "個" },
    ],
  },
  土曜日: {
    menu: "カレー",
    ingredients: [
      { name: "豚肉", category: "肉・魚", amount: 150, unit: "g" },
      { name: "じゃがいも", category: "野菜", amount: 1, unit: "個" },
      { name: "にんじん", category: "野菜", amount: 0.5, unit: "本" },
      { name: "玉ねぎ", category: "野菜", amount: 0.5, unit: "個" },
      { name: "カレールー", category: "調味料", amount: 0.25, unit: "箱" },
    ],
  },
  日曜日: {
    menu: "鍋",
    ingredients: [
      { name: "白菜", category: "野菜", amount: 0.1, unit: "玉" },
      { name: "豚肉", category: "肉・魚", amount: 150, unit: "g" },
      { name: "豆腐", category: "卵・豆腐・乳製品", amount: 0.5, unit: "丁" },
      { name: "長ねぎ", category: "野菜", amount: 0.5, unit: "本" },
      { name: "しめじ", category: "野菜", amount: 0.5, unit: "パック" },
    ],
  },
};

export default function Home() {
  const [showResult, setShowResult] = useState(false);

  const [adultCount, setAdultCount] = useState(2);
  const [childCount, setChildCount] = useState(2);

  const [selectedDays, setSelectedDays] = useState<string[]>(days);
  const [includedDays, setIncludedDays] = useState<string[]>(days);

  const [openCategories, setOpenCategories] = useState<string[]>(categoryOrder);

  const servingCount = adultCount + childCount * 0.5;

  const toggleCategory = (category: string) => {
    setOpenCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
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

  const selectedMenus = days
    .filter((day) => selectedDays.includes(day))
    .map((day) => ({
      day,
      menu: sampleMenus[day].menu,
      ingredients: sampleMenus[day].ingredients,
    }));

  const shoppingList = selectedMenus
    .filter((item) => includedDays.includes(item.day))
    .flatMap((item) => item.ingredients)
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

    if (roundedAmount === 0.25) {
      return `1/4${unit}`;
    }

    if (roundedAmount === 0.5) {
      return `1/2${unit}`;
    }

    if (roundedAmount === 0.75) {
      return `3/4${unit}`;
    }

    if (Number.isInteger(roundedAmount)) {
      return `${roundedAmount}${unit}`;
    }

    return `${roundedAmount}${unit}`;
  };

  const copyShoppingList = async () => {
    const text = groupedShoppingList
      .map((group) => {
        const items = group.ingredients
          .filter((ingredient) => !checkedIngredients.includes(ingredient.name))
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

    await navigator.clipboard.writeText(text);
    alert("買い物リストをコピーしました！");
  };

  const shareToLine = () => {
    const text = groupedShoppingList
      .map((group) => {
        const items = group.ingredients
          .filter((ingredient) => !checkedIngredients.includes(ingredient.name))
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

    const url = `https://line.me/R/msg/text/?${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  const [checkedIngredients, setCheckedIngredients] = useState<string[]>([]);


  const toggleIngredient = (ingredientName: string) => {
    setCheckedIngredients((prev) =>
      prev.includes(ingredientName)
        ? prev.filter((item) => item !== ingredientName)
        : [...prev, ingredientName]
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
                  <input type="checkbox" />
                  <span>{item}</span>
                </label>
              )
            )}
          </div>
        </div>

        <button
          onClick={() => setShowResult(true)}
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
                    className="flex items-center justify-between border rounded p-3"
                  >
                    <div>
                      <p className="font-semibold">{item.day}</p>
                      <p>{item.menu}</p>
                    </div>

                    <label className="flex items-center gap-2 text-sm">
                      <input
                        type="checkbox"
                        checked={includedDays.includes(item.day)}
                        onChange={() => toggleIncludedDay(item.day)}
                      />
                      <span>買い物リストに含める</span>
                    </label>
                  </div>
                ))}
              </div>
            )}

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
                            const isChecked = checkedIngredients.includes(ingredient.name);

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
                                      onChange={() => toggleIngredient(ingredient.name)}
                                    />
                                    <span>{ingredient.name}</span>
                                  </div>

                                  <span className="font-semibold">
                                    {formatAmount(ingredient.amount, ingredient.unit)}
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