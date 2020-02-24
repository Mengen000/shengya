/*实例插件：为元素添加指定的动画效果(animate.css)*/
jQuery.fn.animate2 = function(){
	//console.log(this) //此处的this指代jQuery类数组对象，不是DOM对象
	this.on('mouseenter', function(){
		//console.log(this) //此处的this指代的DOM对象，而不是jQuery实例
		let ani = $(this).data('animate')//获取data-animate属性的值
		$(this).addClass('animated '+ani)//添加两个动画类
	}).on('mouseleave', function(){
		let ani = $(this).data('animate')
		$(this).removeClass('animated '+ani)//移除两个动画类
	})
}
//使用指定的选择器选中元素，调用自定义动画插件
$('[data-animate]').animate2()


/*实例插件：下拉菜单 .dropdown>span+.menu*/
jQuery.fn.dropdown = function(){
	this.on('mouseenter', function(){
		$(this).find('.menu').slideDown()//展开
	}).on('mouseleave', function(){
		$(this).find('.menu').slideUp()//收起
	})
}
//使用下拉菜单插件
$('[data-toggle="dropdown"]').dropdown()


/*实例插件：标签页  .tabs>.list-inline+pane*3 */
jQuery.fn.tabs = function(){
	this.find('.list-inline li').on('mouseenter', function(){
		$(this).addClass('active').siblings('.active').removeClass('active')  //当前li添加active类，兄弟失去active类
		
		let i = $(this).index()//当前li的在同级元素中的下标
		let pane = $(this).parent().parent().find('.pane')[i]//与当前li的下标一样的pane——此处的pane是DOM对象，不是jQuery对象
		$(pane).addClass('active').siblings('.active').removeClass('active')//找到的pane获得active类，其兄弟失去active类
	})
}
$('[data-toggle="tabs"]').tabs()