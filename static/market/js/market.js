$(function () {
    $('.market').width(innerWidth)

    // 获取typeIndex
    typeIndex = $.cookie('typeIndex')
    if (typeIndex){ // 已经有点击分类
        $('.type-slider .type-item').eq(typeIndex).addClass('active')
    } else {    // 没有点击分类
        // 没有点击默认第一个
        $('.type-slider .type-item:first').addClass('active')
    }


    // 侧边栏
    // 问题: 点击时，样式已经添加。
    //       但这是a标签，需要重新获取页面，即重新刷新页面，样式就恢复到原来的
    // 解决: 单击时，记录操作的位置
    //       当页面刷新后，JS获取对应操作位置，并设置对应样式

    // cookie
    // 设置cookie
    // $.(key, value, options)   options >> {expires:过期时间, path: 路径}

    // 获取cookie
    // $.(key)

    // 删除cookie
    // $.(key, null)
    $('.type-item').click(function () {
        // $(this).addClass('active')
        // 记录位置
        $.cookie('typeIndex', $(this).index(), {expires:3, path:'/'})
    })


    // 分类按钮
    categoryBt = false  // 默认是隐藏
    $('#categoryBt').click(function () {
        // 取反
        categoryBt = !categoryBt

        categoryBt ? categoryViewShow() : categoryViewHide()
    })


    // 排序按钮
    sortBt = false  // 默认是隐藏
    $('#sortBt').click(function () {
        // 取反
        sortBt = !sortBt

        sortBt ? sortViewShow() : sortViewHide()
    })

    // 灰色蒙层
    $('.bounce-view').click(function () {
        sortBt = false
        sortViewHide()
        categoryBt = false
        categoryViewHide()
    })


    function categoryViewShow() {
        sortBt = false
        sortViewHide()
        $('.bounce-view.category-view').show()
        $('#categoryBt i').removeClass('glyphicon-triangle-top').addClass('glyphicon-triangle-bottom')
    }
    function categoryViewHide() {
        $('.bounce-view.category-view').hide()
        $('#categoryBt i').removeClass('glyphicon-triangle-bottom').addClass('glyphicon-triangle-top')
    }

    function sortViewShow() {
        categoryBt = false
        categoryViewHide()
        $('.bounce-view.sort-view').show()
        $('#sortBt i').removeClass('glyphicon-triangle-top').addClass('glyphicon-triangle-bottom')
    }
    function sortViewHide() {
        $('.bounce-view.sort-view').hide()
        $('#sortBt i').removeClass('glyphicon-triangle-bottom').addClass('glyphicon-triangle-top')
    }
})