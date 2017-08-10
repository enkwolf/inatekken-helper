const transmap = {
    "豪鬼": "Akuma",
    "クラウディオ": "Claudio",
    "カタリーナ": "Katarina",
    "ラッキークロエ": "Lucky Chloe",
    "シャヒーン": "Shaheen",
    "ジョシー": "Josie",
    "ギガース": "Gigas",
    "一美": "Kazumi",
    "一八": "Kazuya",
    "平八": "Heihachi",
    "ラース": "Lars",
    "飛鳥": "Asuka",
    "リリ": "Lili",
    "アリサ": "Alisa",
    "シャオユウ": "Xiayou",
    "フェン": "Feng",
    "ポール": "Paul",
    "ロウ": "Law",
    "スティーブ": "Steve",
    "レオ": "Leo",
    "ファラン": "Hwoarang",
    "キング": "King",
    "ドラグノフ": "Dragunov",
    "ブライアン": "Bryan",
    "仁": "Jin",
    "デビル仁": "Devil Jin",
    "吉光": "Yoshimitsu",
    "ジャック7": "Jack-7",
    "ニーナ": "Nina",
    "ボブ": "Bob",
    "Mレイヴン": "M Raven",
    "リー/<br>ヴァイオレット": "Lee/<br>Violet",
    "ミゲル": "Miguel",
    "クマ/パンダ": "Kuma/Panda",
    "エディ": "Eddy",
    "エリザ": "Eliza",
    "固有技": "FRAMES",
    "技名": "Name",
    "コマンド": "Command",
    "判定": "Hit level",
    "ダメージ": "Damage",
    "発生": "Startup",
    "ガード": "On block",
    "ヒット": "On hit",
    "CH": "On CH",
    "備考": "Notes"    
};

const hit_cell_trans = {
    "上": "h",
    "特中": "sm",
    "中": "m",
    "下": "l",
    "ガ不": "ub",
    "打投": "t",
    "lc": "(lc)",
    "bs": "(bs)",
    "bc": "(bc)",
    "cs": "(cs)",
    "js": "(js)",
    "返し": "reversal",
    "特殊": "special",
    "捌き": "parry"    
}

const command_cell_trans = {
    "レイジ中に": "(rage) ",
    "レイジ中": "(rage) ",
    "立ち途中に": "ws ",
    "立ち途中": "ws ",
    "しゃがみ中に": "fc ",
    "しゃがみ中": "fc ",
    "横移動中に": "ss ",    
    "横移動中": "ss "    
}

trans_full = function(i, e) {
    let e = $(e);
    if (transmap[e.html()]) {
        e.html(transmap[e.html()]);
    }
}

trans_cells = function(i, e) {
    let e = $(e);
    let c = e.html();
    //command column
    if (i % 9 == 1) {
        Object.keys(command_cell_trans).forEach(function(key) {
            c = c.replace(new RegExp(key, "gi"), command_cell_trans[key]);
        });
        e.html(c);
    }
    //hit level column
    else if (i % 9 == 2) {
        Object.keys(hit_cell_trans).forEach(function(key) {
            c = c.replace(new RegExp(key, "gi"), hit_cell_trans[key]);
        });        
        e.html(c);
    }
    
}

$("table > tbody").find("a").each(trans_full);
$("div.user-area").children("a").each(trans_full);
$("div.user-area > table").before("lc = tech crouch, recovers high<br>bs = back sway<br>bc = back crouch<br>cs = recovers crouching<br>js = low crush<br>special = stance, cancel etc.")
$("div.user-area > table").find("th").each(trans_full);
$("div.user-area > table").find("td").each(trans_cells);


