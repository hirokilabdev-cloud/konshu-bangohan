import { type Ingredient } from "./menus";

export type SideDish = {
    name: string;
    tags: string[];
    ingredients: Ingredient[];
};

export const sideDishPool: SideDish[] = [
    {
        name: "サラダパック",
        tags: ["野菜", "さっぱり", "買うだけ"],
        ingredients: [
            { name: "サラダパック", category: "野菜", amount: 1, unit: "袋" },
        ],
    },
    {
        name: "納豆",
        tags: ["たんぱく質", "買うだけ", "時短"],
        ingredients: [
            { name: "納豆", category: "卵・豆腐・乳製品", amount: 1, unit: "パック" },
        ],
    },
    {
        name: "冷奴",
        tags: ["たんぱく質", "さっぱり", "時短"],
        ingredients: [
            { name: "豆腐", category: "卵・豆腐・乳製品", amount: 0.5, unit: "丁" },
        ],
    },
    {
        name: "もずく酢",
        tags: ["さっぱり", "買うだけ"],
        ingredients: [
            { name: "もずく酢", category: "その他", amount: 1, unit: "パック" },
        ],
    },
    {
        name: "めかぶ",
        tags: ["さっぱり", "買うだけ"],
        ingredients: [
            { name: "めかぶ", category: "その他", amount: 1, unit: "パック" },
        ],
    },
    {
        name: "味噌汁",
        tags: ["汁物", "野菜", "時短"],
        ingredients: [
            { name: "味噌", category: "調味料", amount: 0.05, unit: "個" },
            { name: "わかめ", category: "その他", amount: 0.1, unit: "袋" },
        ],
    },
    {
        name: "チョレギサラダ",
        tags: ["野菜", "さっぱり", "買うだけ"],
        ingredients: [
            { name: "チョレギサラダ", category: "野菜", amount: 1, unit: "袋" },
        ],
    },
    {
        name: "海藻サラダ",
        tags: ["野菜", "さっぱり", "買うだけ"],
        ingredients: [
            { name: "海藻サラダ", category: "野菜", amount: 1, unit: "袋" },
        ],
    },
    {
        name: "大根サラダ",
        tags: ["野菜", "さっぱり", "時短"],
        ingredients: [
            { name: "大根", category: "野菜", amount: 0.1, unit: "本" },
        ],
    },
    {
        name: "キャベツの塩昆布和え",
        tags: ["野菜", "時短", "作り置き"],
        ingredients: [
            { name: "キャベツ", category: "野菜", amount: 0.1, unit: "玉" },
            { name: "塩昆布", category: "調味料", amount: 0.1, unit: "袋" },
        ],
    },
    {
        name: "きゅうりスティック",
        tags: ["野菜", "子ども向け", "時短"],
        ingredients: [
            { name: "きゅうり", category: "野菜", amount: 0.5, unit: "本" },
        ],
    },
    {
        name: "ミニトマト",
        tags: ["野菜", "子ども向け", "買うだけ"],
        ingredients: [
            { name: "ミニトマト", category: "野菜", amount: 0.5, unit: "パック" },
        ],
    },
    {
        name: "ブロッコリーサラダ",
        tags: ["野菜", "子ども向け", "時短"],
        ingredients: [
            { name: "ブロッコリー", category: "野菜", amount: 0.5, unit: "株" },
        ],
    },
    {
        name: "ツナサラダ",
        tags: ["野菜", "たんぱく質", "時短"],
        ingredients: [
            { name: "ツナ缶", category: "肉・魚", amount: 0.5, unit: "缶" },
            { name: "サラダパック", category: "野菜", amount: 1, unit: "袋" },
        ],
    },
    {
        name: "ゆでブロッコリー",
        tags: ["野菜", "作り置き", "子ども向け"],
        ingredients: [
            { name: "ブロッコリー", category: "野菜", amount: 0.5, unit: "株" },
        ],
    },
    {
        name: "野菜スティック",
        tags: ["野菜", "子ども向け", "時短"],
        ingredients: [
            { name: "きゅうり", category: "野菜", amount: 0.5, unit: "本" },
            { name: "にんじん", category: "野菜", amount: 0.3, unit: "本" },
        ],
    },
    {
        name: "卵焼き",
        tags: ["たんぱく質", "子ども向け", "作り置き"],
        ingredients: [
            { name: "卵", category: "卵・豆腐・乳製品", amount: 1, unit: "個" },
        ],
    },
    {
        name: "だし巻き卵",
        tags: ["たんぱく質", "子ども向け", "作り置き"],
        ingredients: [
            { name: "卵", category: "卵・豆腐・乳製品", amount: 1, unit: "個" },
        ],
    },
    {
        name: "カニカマ",
        tags: ["たんぱく質", "買うだけ", "子ども向け"],
        ingredients: [
            { name: "カニカマ", category: "肉・魚", amount: 3, unit: "本" },
        ],
    },
    {
        name: "チーズ",
        tags: ["たんぱく質", "買うだけ", "子ども向け"],
        ingredients: [
            { name: "チーズ", category: "卵・豆腐・乳製品", amount: 2, unit: "個" },
        ],
    },
    {
        name: "豆腐となめこの味噌汁",
        tags: ["汁物", "たんぱく質", "野菜"],
        ingredients: [
            { name: "豆腐", category: "卵・豆腐・乳製品", amount: 0.3, unit: "丁" },
            { name: "なめこ", category: "野菜", amount: 0.5, unit: "袋" },
            { name: "味噌", category: "調味料", amount: 0.05, unit: "個" },
        ],
    },
    {
        name: "玉ねぎとわかめの味噌汁",
        tags: ["汁物", "野菜", "時短"],
        ingredients: [
            { name: "玉ねぎ", category: "野菜", amount: 0.3, unit: "個" },
            { name: "わかめ", category: "その他", amount: 0.1, unit: "袋" },
            { name: "味噌", category: "調味料", amount: 0.05, unit: "個" },
        ],
    },
    {
        name: "キャベツの味噌汁",
        tags: ["汁物", "野菜", "時短"],
        ingredients: [
            { name: "キャベツ", category: "野菜", amount: 0.1, unit: "玉" },
            { name: "味噌", category: "調味料", amount: 0.05, unit: "個" },
        ],
    },
    {
        name: "けんちん汁",
        tags: ["汁物", "野菜", "作り置き"],
        ingredients: [
            { name: "大根", category: "野菜", amount: 0.1, unit: "本" },
            { name: "にんじん", category: "野菜", amount: 0.3, unit: "本" },
            { name: "豆腐", category: "卵・豆腐・乳製品", amount: 0.3, unit: "丁" },
        ],
    },
    {
        name: "ミニオムレツ",
        tags: ["たんぱく質", "子ども向け", "時短"],
        ingredients: [
            { name: "卵", category: "卵・豆腐・乳製品", amount: 1, unit: "個" },
            { name: "チーズ", category: "卵・豆腐・乳製品", amount: 10, unit: "g" },
        ],
    },
    {
        name: "ウインナー",
        tags: ["たんぱく質", "子ども向け", "時短"],
        ingredients: [
            { name: "ウインナー", category: "肉・魚", amount: 2, unit: "本" },
        ],
    },
    {
        name: "ハムサラダ",
        tags: ["野菜", "たんぱく質", "時短"],
        ingredients: [
            { name: "ハム", category: "肉・魚", amount: 2, unit: "枚" },
            { name: "サラダパック", category: "野菜", amount: 1, unit: "袋" },
        ],
    },
    {
        name: "ほうれん草バター",
        tags: ["野菜", "子ども向け", "時短"],
        ingredients: [
            { name: "ほうれん草", category: "野菜", amount: 0.5, unit: "束" },
            { name: "バター", category: "卵・豆腐・乳製品", amount: 10, unit: "g" },
        ],
    },
    {
        name: "小松菜と油揚げの煮びたし",
        tags: ["野菜", "作り置き"],
        ingredients: [
            { name: "小松菜", category: "野菜", amount: 0.5, unit: "束" },
            { name: "油揚げ", category: "卵・豆腐・乳製品", amount: 0.5, unit: "枚" },
        ],
    },
    {
        name: "もやしナムル",
        tags: ["野菜", "節約", "作り置き"],
        ingredients: [
            { name: "もやし", category: "野菜", amount: 0.5, unit: "袋" },
        ],
    },
    {
        name: "きゅうりとわかめの酢の物",
        tags: ["野菜", "さっぱり", "作り置き"],
        ingredients: [
            { name: "きゅうり", category: "野菜", amount: 0.5, unit: "本" },
            { name: "わかめ", category: "その他", amount: 0.1, unit: "袋" },
        ],
    },
    {
        name: "春雨サラダ",
        tags: ["野菜", "さっぱり", "作り置き"],
        ingredients: [
            { name: "春雨", category: "その他", amount: 30, unit: "g" },
            { name: "きゅうり", category: "野菜", amount: 0.3, unit: "本" },
            { name: "ハム", category: "肉・魚", amount: 1, unit: "枚" },
        ],
    },
    {
        name: "じゃがいものチーズ焼き",
        tags: ["子ども向け", "作り置き"],
        ingredients: [
            { name: "じゃがいも", category: "野菜", amount: 1, unit: "個" },
            { name: "チーズ", category: "卵・豆腐・乳製品", amount: 20, unit: "g" },
        ],
    },
    {
        name: "かぼちゃサラダ",
        tags: ["野菜", "子ども向け", "作り置き"],
        ingredients: [
            { name: "かぼちゃ", category: "野菜", amount: 0.1, unit: "個" },
        ],
    },
    {
        name: "さつまいもスティック",
        tags: ["野菜", "子ども向け", "作り置き"],
        ingredients: [
            { name: "さつまいも", category: "野菜", amount: 0.5, unit: "本" },
        ],
    },
    {
        name: "ヨーグルト",
        tags: ["さっぱり", "買うだけ", "子ども向け"],
        ingredients: [
            { name: "ヨーグルト", category: "卵・豆腐・乳製品", amount: 1, unit: "個" },
        ],
    },
];