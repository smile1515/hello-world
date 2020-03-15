<template>
    <div class="serach-page">
        <div class="search-header">
            <div class="search-header-content">
                <div class="search-header-input">
                    <div class="search-input-select">
                        <div class="search-tab">
                            <div class="search-tab-text" style="text-indent: 10px;">宝贝</div>
                        </div>
                        <div class="search-iframe">
                            <input autocomplete="off" style="border:none;background:none;height: 26px;"/>
                            <span name="search" class="icon iconfont vue-iconsousuo" style="padding:0 10px;"></span>
                        </div>
                    </div>
                </div>
                <div class="search-btn" style="display: inline-block;padding: 0 20px;font-size: 14px;">取消</div>
            </div>
        </div>
        <div class="search-suggest-container">
            <ul class="suggest-sug">
                <li>
                    <span class="match-world">洗发水</span>
                    去屑 止痒 控油
                    <div class="suggest-icon"><span class="">Go</span></div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
</script>

<style lang="scss">
    .search-header {
        width: 100%;
        height: 44px;
        line-height: 32px;
        padding:6px 0;
        color: #212121;        
        border-bottom:1px solid #dbdbdb;
        .search-header-content {
            display: flex;
        }
        .search-header-input {
            flex: 1;
            margin:0 0 0 12px;
            .search-input-select {
                display: flex;
                height: 32px;
                background-color: #e3e3e5;
                font-size: 14px;
                border-radius:5px;
            }
        }
    }
    .search-suggest-container {
        font-size: 14px;
        background-color: #f9f9f9;
        ul {
            list-style: none;
            text-align: left;
            li {
                height: 43px;
                line-height: 43px;
                border-bottom: 1px solid #dedede;
                padding:0 16px;
                .match-world {
                    color: #999;
                    margin-right: 8px;
                }
                .suggest-icon {
                    float:right;
                    height: 100%;
                    width: 60px;
                    margin-right: -20px;
                    text-align: center;
                }
            }
        }
    }
</style>
