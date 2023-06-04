<template>
    <div class="menu_tree">
        <div v-for="(item, index) in menuData" :key="index" class="menu_tree_item">
            <img v-if="!item.childMenuShow" :src="index === routerIndex ? imgActiveSrc(index) : imgSrc(index)" alt="">
            <el-submenu :index="index + ''" v-if="item.children && item.children.length > 0 && item.childMenuShow">
                <template slot="title">
                    <span>{{ item.pathName }}</span>
                </template>
                <template slot="title">
                    <img :src="index === routerIndex ? imgActiveSrc(index) : imgSrc(index)" alt="">
                </template>
                <menu-tree :menuData="menu_tree_list(item.children)"></menu-tree>
            </el-submenu>
            <el-menu-item v-else :index="item.path">{{ item.pathName }}</el-menu-item>
        </div>
    </div>
</template>

<script>
export default {
    name: 'menu-tree',
    props: {
        menuData: {
            type: Array,
            default: () => []
        },
        activeRouter: {
            type: String,
            default: 'resident'
        }
    },
    data() {
        return {
            routerIndex: 0
        }
    },
    mounted() {
        console.log(this.menuData);
    },
    computed: {
        menu_tree_list() {
            return function (list) {
                let arr = []
                for (let i = 0; i < list.length; i++) {
                    const item = list[i]
                    if (item.pathName) {
                        arr.push(item)
                    }
                }
                return arr
            }
        },

        menuList() {
            return this.$store.state.menuList
        },
        imgSrc() {
            return function (i) {
                return require(`@/assets/images/menu/icon${i + 1}.png`)
            }
        },
        imgActiveSrc() {
            return function (i) {
                return require(`@/assets/images/menu/active_icon${i + 1}.png`)
            }
        }
    },
    watch: {
        'activeRouter': {
            handler(newValue) {
                let index = this.menuList.findIndex(item => {
                    return item.path === newValue
                })
                this.routerIndex = index
            },
            immediate: true
        }
    }
}
</script>

<style scoped lang="scss">
.menu_tree {
    .menu_tree_item {
        position: relative;

        img {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            left: 25px;
            z-index: 9;
        }
    }
}
</style>
