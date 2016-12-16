var grid_data = 
[ 
	{id:"1",conyentName:"Desktop Computer",file:"note",user:"Yes",publish:"FedEx",industry:"媒体", type:"通信",creation:"2007-12-03",update:"2013-10-11",show:"108",theme:"InTime",notes:"1234"},
	{id:"2",conyentName:"Desktop Computer",file:"note",user:"No",publish:"InTime",industry :"医疗", type:"新闻",creation:"2007-12-03",update:"2013-10-11",show:"108",theme:"InTime",notes:"1234"},
	{id:"3",conyentName:"Desktop Computer",file:"note",user:"Yes",publish:"ARAMEX",industry :"通信", type:"通信",creation:"2007-12-03",update:"2013-10-11",show:"107",theme:"ARAMEX",notes:"Computer"},
	{id:"4",conyentName:"Desktop Computer",file:"note",user:"Yes",publish:"InTime",industry :"医疗", type:"新闻",creation:"2007-12-03",update:"2013-10-11",show:"108",theme:"InTime",notes:"Computer"},
	{id:"5",conyentName:"Desktop Computer",file:"note",user:"No",publish:"InTime",industry :"媒体", type:"通信",creation:"2007-12-03",update:"2013-10-11",show:"109",theme:"InTime",notes:"1234"},
	{id:"6",conyentName:"Desktop Computer",file:"note",user:"No",publish:"TNT",industry :"医疗", type:"新闻通信",creation:"2007-12-03",update:"2013-10-11",show:"110",theme:"TNT",notes:"Computer"},
	{id:"7",conyentName:"Desktop Computer",file:"note",user:"No",publish:"已发布",industry :"通信", type:"新闻通信",creation:"2007-12-03",update:"2013-10-11",show:"108",theme:"FedEx",notes:"1234"},
	{id:"8",conyentName:"Desktop Computer",file:"note",user:"Yes",publish:"TNT",industry :"医疗", type:"新闻",creation:"2007-12-03",update:"2013-10-11",show:"109",theme:"TNT",notes:"1234"},
	{id:"9",conyentName:"Desktop Computer",file:"note",user:"Yes",publish:"FedEx",industry :"通信", type:"通信",creation:"2007-12-03",update:"2013-10-11",show:"108",theme:"FedEx",notes:"1234"},
	{id:"10",conyentName:"Desktop Computer",file:"note",user:"Yes",publish:"FedEx",industry:"媒体", type:"通信",creation:"2007-12-03",update:"2013-10-11",show:"107",theme:"FedEx",notes:"1234"},
	{id:"11",conyentName:"Desktop Computer",file:"note",user:"No",publish:"InTime",industry :"医疗", type:"新闻",creation:"2007-12-03",update:"2013-10-11",show:"108",theme:"InTime",notes:"1234"},
	{id:"12",conyentName:"Desktop Computer",file:"note",user:"Yes",publish:"ARAMEX",industry :"通信", type:"通信",creation:"2007-12-03",update:"2013-10-11",show:"107",theme:"ARAMEX",notes:"Computer"},
	{id:"13",conyentName:"Desktop Computer",file:"note",user:"Yes",publish:"InTime",industry :"医疗", type:"新闻",creation:"2007-12-03",update:"2013-10-11",show:"108",theme:"InTime",notes:"Computer"},
	{id:"14",conyentName:"Desktop Computer",file:"note",user:"No",publish:"InTime",industry :"媒体", type:"通信",creation:"2007-12-03",update:"2013-10-11",show:"109",theme:"InTime",notes:"1234"},
	{id:"15",conyentName:"Desktop Computer",file:"note",user:"No",publish:"TNT",industry :"医疗", type:"新闻通信",creation:"2007-12-03",update:"2013-10-11",show:"110",theme:"TNT",notes:"Computer"},
	{id:"16",conyentName:"Desktop Computer",file:"note",user:"No",publish:"FedEx",industry :"通信", type:"新闻通信",creation:"2007-12-03",update:"2013-10-11",show:"108",theme:"FedEx",notes:"1234"},
	{id:"17",conyentName:"Desktop Computer",file:"note",user:"Yes",publish:"TNT",industry :"医疗", type:"新闻",creation:"2007-12-03",update:"2013-10-11",show:"109",theme:"TNT",notes:"1234"},
	{id:"18",conyentName:"Desktop Computer",file:"note",user:"Yes",publish:"FedEx",industry :"通信", type:"通信",creation:"2007-12-03",update:"2013-10-11",show:"108",theme:"FedEx",notes:"1234"}
];

jQuery(function($) {
	var grid_selector = "#grid-table";
	var pager_selector = "#grid-pager";

	jQuery(grid_selector).jqGrid({
		//direction: "rtl",
		
		data: grid_data,
		datatype: "local",
		height: 250,
		colNames:['编码','文件名称','使用状态','发布状态','所属行业','媒体类型','创建时间','更新时间','所属展厅','所属主题','备注'],
		colModel:[
			{name:'id',index:'id', width:50, sorttype:"int", editable: true},
			{name:'conyentName',index:'conyentName', width:150,editable: true,editoptions:{size:"20",maxlength:"30"}},
			{name:'user',index:'user', width:100, editable: true,edittype:"select",editoptions:{value:"FE:已使用;IN:未使用"}},
			{name:'publish',index:'publish', width:80, editable: true,edittype:"select",editoptions:{value:"FE:已发布;IN:未发布"}},
			{name:'industry',index:'industry', width:80, editable: true,edittype:"select",editoptions:{value:"FE:FedEx;IN:InTime;TN:TNT;AR:ARAMEX"}},
			{name:'type',index:'type', width:90, sorttype:"int", editable: true},
			{name:'creation',index:'creation',width:100, editable:true, sorttype:"date",unformat: pickDate},
			{name:'update',index:'update',width:100, editable:true, sorttype:"date",unformat: pickDate},
			{name:'show',index:'show', width:80,editable: true,editoptions:{size:"20",maxlength:"30"}},
			{name:'theme',index:'theme', width:80,editable: true,editoptions:{size:"20",maxlength:"30"}},
			{name:'notes',index:'notes', width:80, sortable:false,editable: true,edittype:"textarea", editoptions:{rows:"2",cols:"10"}}

		], 

		viewrecords : true,
		rowNum:10,
		rowList:[10,20,30],
		pager : pager_selector,
		sortname : "id",
		altRows: true,
		//toppager: true,
		
		multiselect: true,
		//multikey: "ctrlKey",
        multiboxonly: true,

		loadComplete : function() {
			var table = this;
			setTimeout(function(){
				styleCheckbox(table);
				
				updateActionIcons(table);
				updatePagerIcons(table);
				enableTooltips(table);
			}, 0);
		},

		editurl: $path_base,//nothing is saved 
		caption: "多媒体内容管理",


		autowidth: true

	});

	//enable search/filter toolbar
	//jQuery(grid_selector).jqGrid('filterToolbar',{defaultSearch:true,stringResult:true})

	//switch element when editing inline
	function aceSwitch( cellvalue, options, cell ) {
		setTimeout(function(){
			$(cell) .find('input[type=checkbox]')
					.wrap('<label class="inline" />')
				.addClass('ace ace-switch ace-switch-5')
				.after('<span class="lbl"></span>');
		}, 0);
	}
	//enable datepicker
	function pickDate( cellvalue, options, cell ) {
		setTimeout(function(){
			$(cell) .find('input[type=text]')
					.datepicker({format:'yyyy-mm-dd' , autoclose:true}); 
		}, 0);
	}


	//navButtons
	jQuery(grid_selector).jqGrid('navGrid',pager_selector,
		{ 	//navbar options
			edit: false,
			editicon : 'icon-pencil blue',
			add: false,
			addicon : 'icon-plus-sign purple',
			del: false,
			delicon : 'icon-trash red',
			search: false,
			searchicon : 'icon-search orange',
			search: true,
			searchicon : 'icon-search orange',
			reset:false,
			reseticon:'icon-retweet green',
			refresh: false,
			refreshicon : 'icon-refresh green',
			view: false,
			viewicon : 'icon-zoom-in grey',
		},
		{
			//edit record form
			//closeAfterEdit: true,
			recreateForm: true,
			beforeShowForm : function(e) {
				var form = $(e[0]);
				form.closest('.ui-jqdialog').find('.ui-jqdialog-titlebar').wrapInner('<div class="widget-header" />')
				style_edit_form(form);
			}
		},
		{
			//new record form
			closeAfterAdd: true,
			recreateForm: true,
			viewPagerButtons: false,
			beforeShowForm : function(e) {
				var form = $(e[0]);
				form.closest('.ui-jqdialog').find('.ui-jqdialog-titlebar').wrapInner('<div class="widget-header" />')
				style_edit_form(form);
			}
		},
		{
			//delete record form
			recreateForm: true,
			beforeShowForm : function(e) {
				var form = $(e[0]);
				if(form.data('styled')) return false;
				
				form.closest('.ui-jqdialog').find('.ui-jqdialog-titlebar').wrapInner('<div class="widget-header" />')
				style_delete_form(form);
				
				form.data('styled', true);
			},
			onClick : function(e) {
				alert(1);
			}
		},
		{
			//search form
			recreateForm: true,
			afterShowSearch: function(e){
				var form = $(e[0]);
				form.closest('.ui-jqdialog').find('.ui-jqdialog-title').wrap('<div class="widget-header" />')
				style_search_form(form);
			},
			afterRedraw: function(){
				style_search_filters($(this));
			}
			,
			multipleSearch: true,
			/**
			multipleGroup:true,
			showQuery: true
			*/
		},
		{
			//view record form
			recreateForm: true,
			beforeShowForm: function(e){
				var form = $(e[0]);
				form.closest('.ui-jqdialog').find('.ui-jqdialog-title').wrap('<div class="widget-header" />')
			}
		}
	)


	
	function style_edit_form(form) {
		//enable datepicker on "sdate" field and switches for "stock" field
		form.find('input[name=sdate]').datepicker({format:'yyyy-mm-dd' , autoclose:true})
			.end().find('input[name=stock]')
				  .addClass('ace ace-switch ace-switch-5').wrap('<label class="inline" />').after('<span class="lbl"></span>');

		//update buttons classes
		var buttons = form.next().find('.EditButton .fm-button');
		buttons.addClass('btn btn-sm').find('[class*="-icon"]').remove();//ui-icon, s-icon
		buttons.eq(0).addClass('btn-primary').prepend('<i class="icon-ok"></i>');
		
		buttons.eq(1).prepend('<i class="icon-remove"></i>')
		
		buttons = form.next().find('.navButton a');
		buttons.find('.ui-icon').remove();
		buttons.eq(0).append('<i class="icon-chevron-left"></i>');
		buttons.eq(1).append('<i class="icon-chevron-right"></i>');		
	}

	function style_delete_form(form) {
		var buttons = form.next().find('.EditButton .fm-button');
		buttons.addClass('btn btn-sm').find('[class*="-icon"]').remove();//ui-icon, s-icon
		buttons.eq(0).addClass('btn-danger').prepend('<i class="icon-trash"></i>');
		buttons.eq(1).prepend('<i class="icon-remove"></i>')
	}
	
	function style_search_filters(form) {
		form.find('.delete-rule').val('X');
		form.find('.add-rule').addClass('btn btn-xs btn-primary');
		form.find('.add-group').addClass('btn btn-xs btn-success');
		form.find('.delete-group').addClass('btn btn-xs btn-danger');
	}
	function style_search_form(form) {
		var dialog = form.closest('.ui-jqdialog');
		var buttons = dialog.find('.EditTable')
		buttons.find('.EditButton a[id*="_reset"]').addClass('btn btn-sm btn-info').find('.ui-icon').attr('class', 'icon-retweet');
		buttons.find('.EditButton a[id*="_query"]').addClass('btn btn-sm btn-inverse').find('.ui-icon').attr('class', 'icon-comment-alt');
		buttons.find('.EditButton a[id*="_search"]').addClass('btn btn-sm btn-purple').find('.ui-icon').attr('class', 'icon-search');
	}
	
	function beforeDeleteCallback(e) {
		var form = $(e[0]);
		if(form.data('styled')) return false;
		
		form.closest('.ui-jqdialog').find('.ui-jqdialog-titlebar').wrapInner('<div class="widget-header" />')
		style_delete_form(form);
		
		form.data('styled', true);
	}
	
	function beforeEditCallback(e) {
		var form = $(e[0]);
		form.closest('.ui-jqdialog').find('.ui-jqdialog-titlebar').wrapInner('<div class="widget-header" />')
		style_edit_form(form);
	}



	//it causes some flicker when reloading or navigating grid
	//it may be possible to have some custom formatter to do this as the grid is being created to prevent this
	//or go back to default browser checkbox styles for the grid
	function styleCheckbox(table) {
	/**
		$(table).find('input:checkbox').addClass('ace')
		.wrap('<label />')
		.after('<span class="lbl align-top" />')


		$('.ui-jqgrid-labels th[id*="_cb"]:first-child')
		.find('input.cbox[type=checkbox]').addClass('ace')
		.wrap('<label />').after('<span class="lbl align-top" />');
	*/
	}
	

	//unlike navButtons icons, action icons in rows seem to be hard-coded
	//you can change them like this in here if you want
	function updateActionIcons(table) {
		/**
		var replacement = 
		{
			'ui-icon-pencil' : 'icon-pencil blue',
			'ui-icon-trash' : 'icon-trash red',
			'ui-icon-disk' : 'icon-ok green',
			'ui-icon-cancel' : 'icon-remove red'
		};
		$(table).find('.ui-pg-div span.ui-icon').each(function(){
			var icon = $(this);
			var $class = $.trim(icon.attr('class').replace('ui-icon', ''));
			if($class in replacement) icon.attr('class', 'ui-icon '+replacement[$class]);
		})
		*/
	}
	
	//replace icons with FontAwesome icons like above
	function updatePagerIcons(table) {
		var replacement = 
		{
			'ui-icon-seek-first' : 'icon-double-angle-left bigger-140',
			'ui-icon-seek-prev' : 'icon-angle-left bigger-140',
			'ui-icon-seek-next' : 'icon-angle-right bigger-140',
			'ui-icon-seek-end' : 'icon-double-angle-right bigger-140'
		};
		$('.ui-pg-table:not(.navtable) > tbody > tr > .ui-pg-button > .ui-icon').each(function(){
			var icon = $(this);
			var $class = $.trim(icon.attr('class').replace('ui-icon', ''));
			
			if($class in replacement) icon.attr('class', 'ui-icon '+replacement[$class]);
		})
	}

	function enableTooltips(table) {
		$('.navtable .ui-pg-button').tooltip({container:'body'});
		$(table).find('.ui-pg-div').tooltip({container:'body'});
	}

	//var selr = jQuery(grid_selector).jqGrid('getGridParam','selrow');


});
