export type Ingredient = {
    name: string;
    category: string;
    amount: number;
    unit: string;
};

export type Menu = {
    name: string;
    tags: string[];
    sideDishNeeds: string[];
    ingredients: Ingredient[];
};

export const menuPool: Menu[] = [
    {
        name: "親子丼",
        tags: ["時短", "節約", "子ども向け"],
        sideDishNeeds: ["汁物", "野菜"],
        ingredients: [
            { name: "鶏もも肉", category: "肉・魚", amount: 150, unit: "g" },
            { name: "卵", category: "卵・豆腐・乳製品", amount: 1, unit: "個" },
            { name: "玉ねぎ", category: "野菜", amount: 0.5, unit: "個" },
            { name: "ご飯", category: "その他", amount: 0.5, unit: "合" },
        ],
    },
    {
        name: "豚の生姜焼き",
        tags: ["時短", "がっつり"],
        sideDishNeeds: ["野菜", "さっぱり"],
        ingredients: [
            { name: "豚肉", category: "肉・魚", amount: 150, unit: "g" },
            { name: "玉ねぎ", category: "野菜", amount: 0.5, unit: "個" },
            { name: "しょうが", category: "調味料", amount: 0.25, unit: "かけ" },
            { name: "キャベツ", category: "野菜", amount: 0.1, unit: "玉" },
        ],
    },
    {
        name: "鶏の唐揚げ",
        tags: ["がっつり", "子ども向け"],
        sideDishNeeds: ["野菜", "さっぱり"],
        ingredients: [
            { name: "鶏もも肉", category: "肉・魚", amount: 180, unit: "g" },
            { name: "片栗粉", category: "その他", amount: 0.1, unit: "袋" },
            { name: "しょうゆ", category: "調味料", amount: 0.1, unit: "本" },
            { name: "しょうが", category: "調味料", amount: 0.2, unit: "かけ" },
        ],
    },
    {
        name: "チキン南蛮",
        tags: ["がっつり", "子ども向け"],
        sideDishNeeds: ["野菜", "さっぱり"],
        ingredients: [
            { name: "鶏むね肉", category: "肉・魚", amount: 180, unit: "g" },
            { name: "卵", category: "卵・豆腐・乳製品", amount: 0.5, unit: "個" },
            { name: "タルタルソース", category: "調味料", amount: 0.25, unit: "本" },
            { name: "キャベツ", category: "野菜", amount: 0.1, unit: "玉" },
        ],
    },
    {
        name: "鶏そぼろ丼",
        tags: ["時短", "節約", "子ども向け"],
        sideDishNeeds: ["汁物", "野菜"],
        ingredients: [
            { name: "鶏ひき肉", category: "肉・魚", amount: 120, unit: "g" },
            { name: "卵", category: "卵・豆腐・乳製品", amount: 1, unit: "個" },
            { name: "ご飯", category: "その他", amount: 0.5, unit: "合" },
            { name: "しょうゆ", category: "調味料", amount: 0.1, unit: "本" },
        ],
    },
    {
        name: "鶏肉と野菜の甘酢炒め",
        tags: ["野菜多め", "がっつり"],
        sideDishNeeds: ["さっぱり", "買うだけ"],
        ingredients: [
            { name: "鶏もも肉", category: "肉・魚", amount: 150, unit: "g" },
            { name: "玉ねぎ", category: "野菜", amount: 0.5, unit: "個" },
            { name: "ピーマン", category: "野菜", amount: 1, unit: "個" },
            { name: "にんじん", category: "野菜", amount: 0.3, unit: "本" },
        ],
    },
    {
        name: "豚丼",
        tags: ["時短", "がっつり", "節約"],
        sideDishNeeds: ["汁物", "野菜"],
        ingredients: [
            { name: "豚肉", category: "肉・魚", amount: 150, unit: "g" },
            { name: "玉ねぎ", category: "野菜", amount: 0.5, unit: "個" },
            { name: "ご飯", category: "その他", amount: 0.5, unit: "合" },
            { name: "しょうゆ", category: "調味料", amount: 0.1, unit: "本" },
        ],
    },
    {
        name: "豚キムチ",
        tags: ["時短", "がっつり"],
        sideDishNeeds: ["たんぱく質", "さっぱり"],
        ingredients: [
            { name: "豚肉", category: "肉・魚", amount: 150, unit: "g" },
            { name: "キムチ", category: "野菜", amount: 100, unit: "g" },
            { name: "もやし", category: "野菜", amount: 0.5, unit: "袋" },
            { name: "ニラ", category: "野菜", amount: 0.3, unit: "束" },
        ],
    },
    {
        name: "回鍋肉",
        tags: ["がっつり", "野菜多め"],
        sideDishNeeds: ["さっぱり", "汁物"],
        ingredients: [
            { name: "豚肉", category: "肉・魚", amount: 150, unit: "g" },
            { name: "キャベツ", category: "野菜", amount: 0.15, unit: "玉" },
            { name: "ピーマン", category: "野菜", amount: 1, unit: "個" },
            { name: "甜麺醤", category: "調味料", amount: 0.1, unit: "個" },
        ],
    },
    {
        name: "肉じゃが",
        tags: ["節約", "子ども向け"],
        sideDishNeeds: ["たんぱく質", "さっぱり"],
        ingredients: [
            { name: "豚肉", category: "肉・魚", amount: 100, unit: "g" },
            { name: "じゃがいも", category: "野菜", amount: 1, unit: "個" },
            { name: "にんじん", category: "野菜", amount: 0.5, unit: "本" },
            { name: "玉ねぎ", category: "野菜", amount: 0.5, unit: "個" },
        ],
    },
    {
        name: "餃子",
        tags: ["子ども向け", "がっつり"],
        sideDishNeeds: ["野菜", "汁物"],
        ingredients: [
            { name: "餃子", category: "その他", amount: 6, unit: "個" },
            { name: "キャベツ", category: "野菜", amount: 0.1, unit: "玉" },
            { name: "もやし", category: "野菜", amount: 0.3, unit: "袋" },
        ],
    },
    {
        name: "焼きうどん",
        tags: ["時短", "節約", "子ども向け"],
        sideDishNeeds: ["たんぱく質", "さっぱり"],
        ingredients: [
            { name: "うどん", category: "その他", amount: 1, unit: "玉" },
            { name: "豚肉", category: "肉・魚", amount: 80, unit: "g" },
            { name: "キャベツ", category: "野菜", amount: 0.1, unit: "玉" },
            { name: "にんじん", category: "野菜", amount: 0.25, unit: "本" },
        ],
    },
    {
        name: "ナポリタン",
        tags: ["時短", "子ども向け"],
        sideDishNeeds: ["野菜", "たんぱく質"],
        ingredients: [
            { name: "パスタ", category: "その他", amount: 100, unit: "g" },
            { name: "ウインナー", category: "肉・魚", amount: 3, unit: "本" },
            { name: "玉ねぎ", category: "野菜", amount: 0.3, unit: "個" },
            { name: "ピーマン", category: "野菜", amount: 0.5, unit: "個" },
        ],
    },
    {
        name: "ミートソースパスタ",
        tags: ["子ども向け", "がっつり"],
        sideDishNeeds: ["野菜", "さっぱり"],
        ingredients: [
            { name: "パスタ", category: "その他", amount: 100, unit: "g" },
            { name: "合いびき肉", category: "肉・魚", amount: 120, unit: "g" },
            { name: "玉ねぎ", category: "野菜", amount: 0.3, unit: "個" },
            { name: "トマト缶", category: "野菜", amount: 0.3, unit: "缶" },
        ],
    },
    {
        name: "ツナ卵丼",
        tags: ["時短", "節約", "子ども向け"],
        sideDishNeeds: ["汁物", "野菜"],
        ingredients: [
            { name: "ツナ缶", category: "肉・魚", amount: 0.5, unit: "缶" },
            { name: "卵", category: "卵・豆腐・乳製品", amount: 1, unit: "個" },
            { name: "玉ねぎ", category: "野菜", amount: 0.25, unit: "個" },
            { name: "ご飯", category: "その他", amount: 0.5, unit: "合" },
        ],
    },
    {
        name: "そぼろビビンバ風丼",
        tags: ["がっつり", "野菜多め"],
        sideDishNeeds: ["さっぱり", "汁物"],
        ingredients: [
            { name: "合いびき肉", category: "肉・魚", amount: 120, unit: "g" },
            { name: "もやし", category: "野菜", amount: 0.5, unit: "袋" },
            { name: "ほうれん草", category: "野菜", amount: 0.3, unit: "束" },
            { name: "ご飯", category: "その他", amount: 0.5, unit: "合" },
        ],
    },
    {
        name: "鮭の塩焼き",
        tags: ["時短", "ダイエット", "子ども向け"],
        sideDishNeeds: ["野菜", "汁物"],
        ingredients: [
            { name: "鮭", category: "肉・魚", amount: 1, unit: "切れ" },
            { name: "大根", category: "野菜", amount: 0.05, unit: "本" },
        ],
    },
    {
        name: "さばの味噌煮",
        tags: ["節約", "ダイエット"],
        sideDishNeeds: ["野菜", "たんぱく質"],
        ingredients: [
            { name: "さば", category: "肉・魚", amount: 1, unit: "切れ" },
            { name: "味噌", category: "調味料", amount: 0.1, unit: "個" },
            { name: "しょうが", category: "調味料", amount: 0.2, unit: "かけ" },
        ],
    },
    {
        name: "ぶりの照り焼き",
        tags: ["子ども向け", "ダイエット"],
        sideDishNeeds: ["野菜", "汁物"],
        ingredients: [
            { name: "ぶり", category: "肉・魚", amount: 1, unit: "切れ" },
            { name: "しょうゆ", category: "調味料", amount: 0.1, unit: "本" },
            { name: "みりん", category: "調味料", amount: 0.1, unit: "本" },
        ],
    },
    {
        name: "白身魚のムニエル",
        tags: ["子ども向け", "ダイエット"],
        sideDishNeeds: ["野菜", "さっぱり"],
        ingredients: [
            { name: "白身魚", category: "肉・魚", amount: 1, unit: "切れ" },
            { name: "小麦粉", category: "その他", amount: 0.1, unit: "袋" },
            { name: "バター", category: "卵・豆腐・乳製品", amount: 10, unit: "g" },
        ],
    },
    {
        name: "豆腐ハンバーグ",
        tags: ["節約", "子ども向け", "ダイエット"],
        sideDishNeeds: ["野菜", "汁物"],
        ingredients: [
            { name: "豆腐", category: "卵・豆腐・乳製品", amount: 0.5, unit: "丁" },
            { name: "鶏ひき肉", category: "肉・魚", amount: 100, unit: "g" },
            { name: "玉ねぎ", category: "野菜", amount: 0.3, unit: "個" },
            { name: "卵", category: "卵・豆腐・乳製品", amount: 0.5, unit: "個" },
        ],
    },
    {
        name: "豚汁定食",
        tags: ["節約", "野菜多め"],
        sideDishNeeds: ["たんぱく質", "買うだけ"],
        ingredients: [
            { name: "豚肉", category: "肉・魚", amount: 80, unit: "g" },
            { name: "大根", category: "野菜", amount: 0.1, unit: "本" },
            { name: "にんじん", category: "野菜", amount: 0.3, unit: "本" },
            { name: "ごぼう", category: "野菜", amount: 0.3, unit: "本" },
            { name: "味噌", category: "調味料", amount: 0.1, unit: "個" },
        ],
    },
    {
        name: "お好み焼き",
        tags: ["節約", "子ども向け"],
        sideDishNeeds: ["たんぱく質", "さっぱり"],
        ingredients: [
            { name: "キャベツ", category: "野菜", amount: 0.15, unit: "玉" },
            { name: "豚肉", category: "肉・魚", amount: 80, unit: "g" },
            { name: "卵", category: "卵・豆腐・乳製品", amount: 1, unit: "個" },
            { name: "お好み焼き粉", category: "その他", amount: 0.25, unit: "袋" },
        ],
    },
    {
        name: "天津飯",
        tags: ["時短", "節約", "子ども向け"],
        sideDishNeeds: ["野菜", "汁物"],
        ingredients: [
            { name: "卵", category: "卵・豆腐・乳製品", amount: 2, unit: "個" },
            { name: "カニカマ", category: "肉・魚", amount: 3, unit: "本" },
            { name: "ご飯", category: "その他", amount: 0.5, unit: "合" },
        ],
    },
    {
        name: "チャーハン",
        tags: ["時短", "節約", "子ども向け"],
        sideDishNeeds: ["汁物", "野菜"],
        ingredients: [
            { name: "ご飯", category: "その他", amount: 0.5, unit: "合" },
            { name: "卵", category: "卵・豆腐・乳製品", amount: 1, unit: "個" },
            { name: "ハム", category: "肉・魚", amount: 2, unit: "枚" },
            { name: "長ねぎ", category: "野菜", amount: 0.3, unit: "本" },
        ],
    },
    {
        name: "タコライス",
        tags: ["がっつり", "子ども向け"],
        sideDishNeeds: ["汁物", "さっぱり"],
        ingredients: [
            { name: "合いびき肉", category: "肉・魚", amount: 120, unit: "g" },
            { name: "レタス", category: "野菜", amount: 0.15, unit: "玉" },
            { name: "トマト", category: "野菜", amount: 0.5, unit: "個" },
            { name: "ご飯", category: "その他", amount: 0.5, unit: "合" },
        ],
    },
    {
        name: "ドライカレー",
        tags: ["時短", "子ども向け", "がっつり"],
        sideDishNeeds: ["野菜", "さっぱり"],
        ingredients: [
            { name: "合いびき肉", category: "肉・魚", amount: 120, unit: "g" },
            { name: "玉ねぎ", category: "野菜", amount: 0.5, unit: "個" },
            { name: "にんじん", category: "野菜", amount: 0.3, unit: "本" },
            { name: "カレー粉", category: "調味料", amount: 0.1, unit: "個" },
        ],
    },
    {
        name: "クリームシチュー",
        tags: ["子ども向け", "野菜多め"],
        sideDishNeeds: ["さっぱり", "たんぱく質"],
        ingredients: [
            { name: "鶏もも肉", category: "肉・魚", amount: 120, unit: "g" },
            { name: "じゃがいも", category: "野菜", amount: 1, unit: "個" },
            { name: "にんじん", category: "野菜", amount: 0.5, unit: "本" },
            { name: "シチュールー", category: "調味料", amount: 0.25, unit: "箱" },
        ],
    },
    {
        name: "ハヤシライス",
        tags: ["時短", "子ども向け"],
        sideDishNeeds: ["野菜", "さっぱり"],
        ingredients: [
            { name: "牛肉", category: "肉・魚", amount: 120, unit: "g" },
            { name: "玉ねぎ", category: "野菜", amount: 0.5, unit: "個" },
            { name: "ハヤシライスルー", category: "調味料", amount: 0.25, unit: "箱" },
            { name: "ご飯", category: "その他", amount: 0.5, unit: "合" },
        ],
    },
    {
        name: "ロールキャベツ",
        tags: ["子ども向け", "野菜多め"],
        sideDishNeeds: ["さっぱり", "買うだけ"],
        ingredients: [
            { name: "キャベツ", category: "野菜", amount: 0.2, unit: "玉" },
            { name: "合いびき肉", category: "肉・魚", amount: 120, unit: "g" },
            { name: "トマト缶", category: "野菜", amount: 0.25, unit: "缶" },
        ],
    },
    {
        name: "鶏団子スープ",
        tags: ["節約", "野菜多め", "ダイエット"],
        sideDishNeeds: ["ご飯もの", "買うだけ"],
        ingredients: [
            { name: "鶏ひき肉", category: "肉・魚", amount: 120, unit: "g" },
            { name: "白菜", category: "野菜", amount: 0.1, unit: "玉" },
            { name: "長ねぎ", category: "野菜", amount: 0.5, unit: "本" },
            { name: "豆腐", category: "卵・豆腐・乳製品", amount: 0.3, unit: "丁" },
        ],
    },
    {
        name: "牛丼",
        tags: ["時短", "がっつり", "子ども向け"],
        sideDishNeeds: ["野菜", "汁物"],
        ingredients: [
            { name: "牛肉", category: "肉・魚", amount: 150, unit: "g" },
            { name: "玉ねぎ", category: "野菜", amount: 0.5, unit: "個" },
            { name: "ご飯", category: "その他", amount: 0.5, unit: "合" },
            { name: "しょうゆ", category: "調味料", amount: 0.1, unit: "本" },
        ],
    },
    {
        name: "豚しゃぶサラダ",
        tags: ["時短", "ダイエット", "野菜多め"],
        sideDishNeeds: ["汁物", "買うだけ"],
        ingredients: [
            { name: "豚肉", category: "肉・魚", amount: 150, unit: "g" },
            { name: "レタス", category: "野菜", amount: 0.2, unit: "玉" },
            { name: "きゅうり", category: "野菜", amount: 0.5, unit: "本" },
            { name: "ポン酢", category: "調味料", amount: 0.1, unit: "本" },
        ],
    },
    {
        name: "鶏むね肉のピカタ",
        tags: ["節約", "子ども向け", "ダイエット"],
        sideDishNeeds: ["野菜", "汁物"],
        ingredients: [
            { name: "鶏むね肉", category: "肉・魚", amount: 150, unit: "g" },
            { name: "卵", category: "卵・豆腐・乳製品", amount: 0.5, unit: "個" },
            { name: "小麦粉", category: "その他", amount: 0.1, unit: "袋" },
        ],
    },
    {
        name: "鶏肉のトマト煮",
        tags: ["野菜多め", "子ども向け"],
        sideDishNeeds: ["たんぱく質", "さっぱり"],
        ingredients: [
            { name: "鶏もも肉", category: "肉・魚", amount: 150, unit: "g" },
            { name: "トマト缶", category: "野菜", amount: 0.3, unit: "缶" },
            { name: "玉ねぎ", category: "野菜", amount: 0.5, unit: "個" },
            { name: "しめじ", category: "野菜", amount: 0.3, unit: "パック" },
        ],
    },
    {
        name: "親子うどん",
        tags: ["時短", "節約", "子ども向け"],
        sideDishNeeds: ["野菜", "買うだけ"],
        ingredients: [
            { name: "うどん", category: "その他", amount: 1, unit: "玉" },
            { name: "鶏もも肉", category: "肉・魚", amount: 80, unit: "g" },
            { name: "卵", category: "卵・豆腐・乳製品", amount: 1, unit: "個" },
            { name: "長ねぎ", category: "野菜", amount: 0.3, unit: "本" },
        ],
    },
    {
        name: "カレーうどん",
        tags: ["時短", "子ども向け", "がっつり"],
        sideDishNeeds: ["さっぱり", "たんぱく質"],
        ingredients: [
            { name: "うどん", category: "その他", amount: 1, unit: "玉" },
            { name: "豚肉", category: "肉・魚", amount: 80, unit: "g" },
            { name: "長ねぎ", category: "野菜", amount: 0.3, unit: "本" },
            { name: "カレールー", category: "調味料", amount: 0.15, unit: "箱" },
        ],
    },
    {
        name: "あんかけ焼きそば",
        tags: ["野菜多め", "がっつり"],
        sideDishNeeds: ["さっぱり", "汁物"],
        ingredients: [
            { name: "焼きそば麺", category: "その他", amount: 1, unit: "玉" },
            { name: "豚肉", category: "肉・魚", amount: 100, unit: "g" },
            { name: "白菜", category: "野菜", amount: 0.1, unit: "玉" },
            { name: "にんじん", category: "野菜", amount: 0.3, unit: "本" },
        ],
    },
    {
        name: "鶏肉の塩だれ炒め",
        tags: ["時短", "がっつり"],
        sideDishNeeds: ["野菜", "さっぱり"],
        ingredients: [
            { name: "鶏もも肉", category: "肉・魚", amount: 150, unit: "g" },
            { name: "長ねぎ", category: "野菜", amount: 0.5, unit: "本" },
            { name: "もやし", category: "野菜", amount: 0.5, unit: "袋" },
            { name: "塩だれ", category: "調味料", amount: 0.1, unit: "本" },
        ],
    },
    {
        name: "豚肉とキャベツの味噌炒め",
        tags: ["時短", "節約", "野菜多め"],
        sideDishNeeds: ["たんぱく質", "さっぱり"],
        ingredients: [
            { name: "豚肉", category: "肉・魚", amount: 150, unit: "g" },
            { name: "キャベツ", category: "野菜", amount: 0.15, unit: "玉" },
            { name: "味噌", category: "調味料", amount: 0.1, unit: "個" },
        ],
    },
    {
        name: "豚肉と小松菜の炒め物",
        tags: ["時短", "野菜多め", "ダイエット"],
        sideDishNeeds: ["汁物", "買うだけ"],
        ingredients: [
            { name: "豚肉", category: "肉・魚", amount: 120, unit: "g" },
            { name: "小松菜", category: "野菜", amount: 0.5, unit: "束" },
            { name: "しめじ", category: "野菜", amount: 0.3, unit: "パック" },
        ],
    },
    {
        name: "鮭チャーハン",
        tags: ["時短", "子ども向け"],
        sideDishNeeds: ["野菜", "汁物"],
        ingredients: [
            { name: "鮭フレーク", category: "肉・魚", amount: 0.3, unit: "瓶" },
            { name: "卵", category: "卵・豆腐・乳製品", amount: 1, unit: "個" },
            { name: "ご飯", category: "その他", amount: 0.5, unit: "合" },
            { name: "長ねぎ", category: "野菜", amount: 0.3, unit: "本" },
        ],
    },
    {
        name: "ツナマヨ丼",
        tags: ["時短", "節約", "子ども向け"],
        sideDishNeeds: ["野菜", "汁物"],
        ingredients: [
            { name: "ツナ缶", category: "肉・魚", amount: 0.5, unit: "缶" },
            { name: "マヨネーズ", category: "調味料", amount: 0.1, unit: "本" },
            { name: "ご飯", category: "その他", amount: 0.5, unit: "合" },
            { name: "海苔", category: "その他", amount: 0.1, unit: "袋" },
        ],
    },
    {
        name: "鶏肉の親子煮",
        tags: ["節約", "子ども向け"],
        sideDishNeeds: ["野菜", "汁物"],
        ingredients: [
            { name: "鶏もも肉", category: "肉・魚", amount: 120, unit: "g" },
            { name: "卵", category: "卵・豆腐・乳製品", amount: 1, unit: "個" },
            { name: "玉ねぎ", category: "野菜", amount: 0.5, unit: "個" },
        ],
    },
    {
        name: "ポークチャップ",
        tags: ["時短", "がっつり", "子ども向け"],
        sideDishNeeds: ["野菜", "さっぱり"],
        ingredients: [
            { name: "豚肉", category: "肉・魚", amount: 150, unit: "g" },
            { name: "玉ねぎ", category: "野菜", amount: 0.5, unit: "個" },
            { name: "ケチャップ", category: "調味料", amount: 0.1, unit: "本" },
        ],
    },
    {
        name: "しょうが焼き丼",
        tags: ["時短", "がっつり"],
        sideDishNeeds: ["野菜", "汁物"],
        ingredients: [
            { name: "豚肉", category: "肉・魚", amount: 150, unit: "g" },
            { name: "しょうが", category: "調味料", amount: 0.2, unit: "かけ" },
            { name: "ご飯", category: "その他", amount: 0.5, unit: "合" },
            { name: "キャベツ", category: "野菜", amount: 0.1, unit: "玉" },
        ],
    },
    {
        name: "豚肉ともやしのレンジ蒸し",
        tags: ["時短", "節約", "ダイエット"],
        sideDishNeeds: ["汁物", "たんぱく質"],
        ingredients: [
            { name: "豚肉", category: "肉・魚", amount: 120, unit: "g" },
            { name: "もやし", category: "野菜", amount: 0.8, unit: "袋" },
            { name: "ポン酢", category: "調味料", amount: 0.1, unit: "本" },
        ],
    },
    {
        name: "鶏肉と大根の煮物",
        tags: ["節約", "子ども向け"],
        sideDishNeeds: ["野菜", "たんぱく質"],
        ingredients: [
            { name: "鶏もも肉", category: "肉・魚", amount: 120, unit: "g" },
            { name: "大根", category: "野菜", amount: 0.15, unit: "本" },
            { name: "にんじん", category: "野菜", amount: 0.3, unit: "本" },
        ],
    },
    {
        name: "鶏肉とじゃがいもの照り煮",
        tags: ["節約", "子ども向け", "がっつり"],
        sideDishNeeds: ["さっぱり", "野菜"],
        ingredients: [
            { name: "鶏もも肉", category: "肉・魚", amount: 120, unit: "g" },
            { name: "じゃがいも", category: "野菜", amount: 1, unit: "個" },
            { name: "しょうゆ", category: "調味料", amount: 0.1, unit: "本" },
        ],
    },
    {
        name: "さば缶カレー",
        tags: ["時短", "節約", "ダイエット"],
        sideDishNeeds: ["野菜", "さっぱり"],
        ingredients: [
            { name: "さば缶", category: "肉・魚", amount: 0.5, unit: "缶" },
            { name: "玉ねぎ", category: "野菜", amount: 0.5, unit: "個" },
            { name: "カレールー", category: "調味料", amount: 0.2, unit: "箱" },
            { name: "ご飯", category: "その他", amount: 0.5, unit: "合" },
        ],
    },
    {
        name: "ちゃんちゃん焼き",
        tags: ["野菜多め", "子ども向け"],
        sideDishNeeds: ["たんぱく質", "汁物"],
        ingredients: [
            { name: "鮭", category: "肉・魚", amount: 1, unit: "切れ" },
            { name: "キャベツ", category: "野菜", amount: 0.15, unit: "玉" },
            { name: "しめじ", category: "野菜", amount: 0.3, unit: "パック" },
            { name: "味噌", category: "調味料", amount: 0.1, unit: "個" },
        ],
    },
    {
        name: "鶏肉のグラタン",
        tags: ["子ども向け", "がっつり"],
        sideDishNeeds: ["野菜", "さっぱり"],
        ingredients: [
            { name: "鶏もも肉", category: "肉・魚", amount: 100, unit: "g" },
            { name: "マカロニ", category: "その他", amount: 50, unit: "g" },
            { name: "牛乳", category: "卵・豆腐・乳製品", amount: 100, unit: "ml" },
            { name: "チーズ", category: "卵・豆腐・乳製品", amount: 30, unit: "g" },
        ],
    },
    {
        name: "ドリア",
        tags: ["子ども向け", "がっつり"],
        sideDishNeeds: ["野菜", "さっぱり"],
        ingredients: [
            { name: "ご飯", category: "その他", amount: 0.5, unit: "合" },
            { name: "鶏もも肉", category: "肉・魚", amount: 80, unit: "g" },
            { name: "牛乳", category: "卵・豆腐・乳製品", amount: 100, unit: "ml" },
            { name: "チーズ", category: "卵・豆腐・乳製品", amount: 30, unit: "g" },
        ],
    },
    {
        name: "厚揚げの肉味噌炒め",
        tags: ["節約", "がっつり"],
        sideDishNeeds: ["野菜", "汁物"],
        ingredients: [
            { name: "厚揚げ", category: "卵・豆腐・乳製品", amount: 0.5, unit: "枚" },
            { name: "豚ひき肉", category: "肉・魚", amount: 100, unit: "g" },
            { name: "味噌", category: "調味料", amount: 0.1, unit: "個" },
        ],
    },
    {
        name: "豆腐チャンプルー",
        tags: ["節約", "野菜多め"],
        sideDishNeeds: ["汁物", "さっぱり"],
        ingredients: [
            { name: "豆腐", category: "卵・豆腐・乳製品", amount: 0.5, unit: "丁" },
            { name: "豚肉", category: "肉・魚", amount: 80, unit: "g" },
            { name: "もやし", category: "野菜", amount: 0.5, unit: "袋" },
            { name: "卵", category: "卵・豆腐・乳製品", amount: 0.5, unit: "個" },
        ],
    },
    {
        name: "野菜たっぷりラーメン",
        tags: ["時短", "野菜多め", "がっつり"],
        sideDishNeeds: ["たんぱく質", "買うだけ"],
        ingredients: [
            { name: "ラーメン", category: "その他", amount: 1, unit: "玉" },
            { name: "豚肉", category: "肉・魚", amount: 80, unit: "g" },
            { name: "もやし", category: "野菜", amount: 0.5, unit: "袋" },
            { name: "キャベツ", category: "野菜", amount: 0.1, unit: "玉" },
        ],
    },
    {
        name: "冷やし中華",
        tags: ["時短", "子ども向け"],
        sideDishNeeds: ["たんぱく質", "買うだけ"],
        ingredients: [
            { name: "冷やし中華麺", category: "その他", amount: 1, unit: "玉" },
            { name: "ハム", category: "肉・魚", amount: 2, unit: "枚" },
            { name: "卵", category: "卵・豆腐・乳製品", amount: 1, unit: "個" },
            { name: "きゅうり", category: "野菜", amount: 0.5, unit: "本" },
        ],
    },
    {
        name: "焼き魚定食",
        tags: ["時短", "ダイエット"],
        sideDishNeeds: ["野菜", "たんぱく質"],
        ingredients: [
            { name: "魚の切り身", category: "肉・魚", amount: 1, unit: "切れ" },
            { name: "大根", category: "野菜", amount: 0.05, unit: "本" },
            { name: "ご飯", category: "その他", amount: 0.5, unit: "合" },
        ],
    },
    {
        name: "コロッケ定食",
        tags: ["子ども向け", "時短"],
        sideDishNeeds: ["野菜", "汁物"],
        ingredients: [
            { name: "コロッケ", category: "その他", amount: 2, unit: "個" },
            { name: "キャベツ", category: "野菜", amount: 0.1, unit: "玉" },
            { name: "ご飯", category: "その他", amount: 0.5, unit: "合" },
        ],
    },
];