<template>
    <h2 class="remd_tl">最新音乐</h2>
    <div class="remd_newsg">
        <div class="m-sglst">
            <a class="m-sgitem" href="//music.163.com/m/song?id=2082116396">
                <div class="sgfr f-bd f-bd-btm">
                    <div class="sgchfl">
                        <div class="f-thide sgtl">大眼睛</div>
                        <div class="f-thide sginfo"><i class="u-hmsprt sghot"></i>易烊千玺 - 大眼睛</div>
                    </div>
                    <div class="sgchfr"><span class="u-hmsprt sgchply"></span></div>
                </div>
            </a><a class="m-sgitem" href="//music.163.com/m/song?id=2082296570">
                <div class="sgfr f-bd f-bd-btm">
                    <div class="sgchfl">
                        <div class="f-thide sgtl">Snooze (Acoustic)</div>
                        <div class="f-thide sginfo">SZA / Justin Bieber - Snooze (Acoustic)</div>
                    </div>
                    <div class="sgchfr"><span class="u-hmsprt sgchply"></span></div>
                </div>
            </a><a class="m-sgitem" href="//music.163.com/m/song?id=2082097128">
                <div class="sgfr f-bd f-bd-btm">
                    <div class="sgchfl">
                        <div class="f-thide sgtl">不忘<span class="sgalia">(电视剧《九义人》主题曲)</span></div>
                        <div class="f-thide sginfo"><i class="u-hmsprt sghot"></i>袁娅维TIA RAY - 不忘</div>
                    </div>
                    <div class="sgchfr"><span class="u-hmsprt sgchply"></span></div>
                </div>
            </a><a class="m-sgitem" href="//music.163.com/m/song?id=2080124800">
                <div class="sgfr f-bd f-bd-btm">
                    <div class="sgchfl">
                        <div class="f-thide sgtl">
                            硝子窓<span class="sgalia">(电影《勿言推理》主题曲)</span>
                        </div>
                        <div class="f-thide sginfo">King Gnu - 硝子窓</div>
                    </div>
                    <div class="sgchfr"><span class="u-hmsprt sgchply"></span></div>
                </div>
            </a><a class="m-sgitem" href="//music.163.com/m/song?id=2081723423">
                <div class="sgfr f-bd f-bd-btm">
                    <div class="sgchfl">
                        <div class="f-thide sgtl">Balut</div>
                        <div class="f-thide sginfo">Doja Cat - Balut</div>
                    </div>
                    <div class="sgchfr"><span class="u-hmsprt sgchply"></span></div>
                </div>
            </a><a class="m-sgitem" href="//music.163.com/m/song?id=2078662235">
                <div class="sgfr f-bd f-bd-btm">
                    <div class="sgchfl">
                        <div class="f-thide sgtl">Shooting Star(Redecorate ver.)</div>
                        <div class="f-thide sginfo">
                            <i class="u-hmsprt sghot"></i>KOTOKO - リデコレイト･マイセルフ
                        </div>
                    </div>
                    <div class="sgchfr"><span class="u-hmsprt sgchply"></span></div>
                </div>
            </a><a class="m-sgitem" href="//music.163.com/m/song?id=2081096098">
                <div class="sgfr f-bd f-bd-btm">
                    <div class="sgchfl">
                        <div class="f-thide sgtl">Gimme Love</div>
                        <div class="f-thide sginfo"><i class="u-hmsprt sghot"></i>Sia - Gimme Love</div>
                    </div>
                    <div class="sgchfr"><span class="u-hmsprt sgchply"></span></div>
                </div>
            </a><a class="m-sgitem" href="//music.163.com/m/song?id=2077516623">
                <div class="sgfr f-bd f-bd-btm">
                    <div class="sgchfl">
                        <div class="f-thide sgtl">靠近我</div>
                        <div class="f-thide sginfo"><i class="u-hmsprt sghot"></i>张新成 - 2022 太空漫游</div>
                    </div>
                    <div class="sgchfr"><span class="u-hmsprt sgchply"></span></div>
                </div>
            </a><a class="m-sgitem" href="//music.163.com/m/song?id=2082065529">
                <div class="sgfr f-bd f-bd-btm">
                    <div class="sgchfl">
                        <div class="f-thide sgtl">I say bye</div>
                        <div class="f-thide sginfo"><i class="u-hmsprt sghot"></i>imase - I say bye</div>
                    </div>
                    <div class="sgchfr"><span class="u-hmsprt sgchply"></span></div>
                </div>
            </a><a class="m-sgitem" href="//music.163.com/m/song?id=2080240942">
                <div class="sgfr f-bd f-bd-btm">
                    <div class="sgchfl">
                        <div class="f-thide sgtl">Glad (Song By Lumel)</div>
                        <div class="f-thide sginfo">KozyPop / Lumel - SEOULVIBES, KAFFE</div>
                    </div>
                    <div class="sgchfr"><span class="u-hmsprt sgchply"></span></div>
                </div>
            </a>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.m-sglst {
    position: relative;
}

.m-sgitem,
.m-sgitem .sgfl {
    display: flex;
}

.m-sgitem {
    padding-left: 10px;
}

.m-sgitem .sgchfl,
.m-sgitem .sgfr {
    flex: 1 1 auto;
}

.m-sgitem .sgfr {
    display: flex;
    position: relative;
}

.f-bd {
    position: relative;
}

.m-sgitem .sgchfl {
    padding: 6px 0;
    width: 0;
}

.m-sgitem .sgchfl,
.m-sgitem .sgfr {
    flex: 1 1 auto;
}

.m-sgitem .sgtl {
    font-size: 17px;
}

.f-thide {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: normal;
}

.m-sgitem .sginfo {
    font-size: 12px;
    color: #888;
}

.f-thide {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: normal;
}

.m-sgitem .sghot {
    display: inline-block;
    width: 12px;
    height: 8px;
    margin-right: 4px;
}

.u-hmsprt {
    background: url(//s3.music.126.net/mobile-new/img/index_icon_2x.png?5207a28…=) no-repeat;
    background-size: 166px 97px;
}

.u-hmsprt {
    background: url(//s3.music.126.net/mobile-new/img/index_icon_2x.png?5207a28…=) no-repeat;
    background-size: 166px 97px;
}

.m-sgitem .sgchfr {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 0 10px;
}

.m-sgitem .sgchply {
    display: inline-block;
    width: 22px;
    height: 22px;
    background-position: -24px 0;
}

.u-hmsprt {
    background: url(//s3.music.126.net/mobile-new/img/index_icon_2x.png?5207a28…=) no-repeat;
    background-size: 166px 97px;
}

.u-hmsprt {
    background: url(//s3.music.126.net/mobile-new/img/index_icon_2x.png?5207a28…=) no-repeat;
    background-size: 166px 97px;
}
</style>
