jQuery(document).ready(function() {


	/* 메인 키비주얼 */
	var swiper1 = new Swiper('.swiper01', {
		spaceBetween: 0,
		loop:true,
		slidesPerView: 1,
		pagination: {
			el: '.swiper-pagination1',
			type: 'fraction',
		},
		 navigation: {
          nextEl: '.swiper-button-next1',
          prevEl: '.swiper-button-prev1',
        }
	});


	/* 메인 탭 상품진열 */
	jQuery('ul.m_tab01 li').click(function() {
		var activeTab = jQuery(this).attr('data-tab');
		jQuery('ul.m_tab01 li').removeClass('current');
		jQuery('.tabcontent01').removeClass('current');
		jQuery(this).addClass('current');
		jQuery('#' + activeTab).addClass('current');
	});



	/* 메인 탭 상품진열 슬라이드 */
	var swiperRoll = new Swiper('.swiper_roll', {
		roundLengths: true,
		observer: true,
		observeParents: true,
		slidesPerView: 'auto',
		spaceBetween: 10,
		scrollbar: {
			el: '.swiper-scrollbar-tab',
			draggable: false,
		}
	});


	/* 메인 트렌드 키워드 슬라이드 */
	var main_keyword_list = new Swiper('.main_keyword_list', {
		roundLengths: true,
		observer: true,
		observeParents: true,
		slidesPerView: 'auto',
		spaceBetween: 10,
	});


	/* 메인영역 04 : 이벤트배너 */
	var swiper04 = new Swiper('.swiper04', {
		loop: true,
		slidesPerView: '1',
		spaceBetween:0,
		effect: 'fade',
		autoplay: {
			delay: 7000,
			disableOnInteraction: false,
		},
		pagination: {
			el: '.swiper-pagination-04',
			clickable: true,			
		},
		speed:500
	});


	/* 메인영역 05 : 신규 상품 */
	var swiper_new = new Swiper('.swiper_new', {
		roundLengths: true,
		loop: true,
		loopedSlides: 3,
		slidesPerView: '1.5',
		centeredSlides: true,
		spaceBetween : 24,
		pagination: {
			el: '.swiper-pagination-new',
		},
	 });
	 var obj =  jQuery(".swiper_new .swiper-pagination-bullet"),
	  bulLength = obj.length,
	  bulWidth = 100 / bulLength;
	  if(bulLength == 1) {
	  obj.parent().hide();
	  }
	  else {
	  obj.css({
	  "width" : bulWidth+"%"
	  });
	 }


	/* 메인영역 07 : 베스트 리뷰 */
	var review_li = new Swiper('.review_li', {
		roundLengths: true,
		loop: true,
		//loopedSlides: 3,
		slidesPerView: '1',
		centeredSlides: true,
		spaceBetween : 24,
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
        },
		/*pagination: {
			el: '.swiper-pagination-review',
		},*/
	 });
	 var obj =  jQuery(".review_li .swiper-pagination-bullet"),
	  bulLength = obj.length,
	  bulWidth = 100 / bulLength;
	  if(bulLength == 1) {
	  obj.parent().hide();
	  }
	  else {
	  obj.css({
	  "width" : bulWidth+"%"
	  });
	 }



	/* 베스트구매후기 별점 */
	jQuery('.review_li span.count').each(function(){
		var star = jQuery(this).text()
		jQuery(this).attr('style',"background:url('morenvyimg/re_star0" + star + ".png') no-repeat")
	})
    
    
    /*제품명 옆에 용량표시*/
    jQuery(".xans-product .prdList li").each(function(){
    	simple_size = jQuery(this).find("ul li:nth-child(4) .m_item span").text();
        //console.log(simple_size);
        //jQuery(this).find("ul li:nth-child(2)").append("<span class='this_size'>("+simple_size+")</span>");
    });
    
     /* 검색결과 제품명 옆에 용량표시*/
    jQuery(".xans-search-result .prdList li").each(function(){
    	simple_size = jQuery(this).find("ul li:nth-child(3) .m_item span").text();
        //console.log(simple_size);
        //jQuery(this).find("ul li:nth-child(1)").append("<span class='this_size'>("+simple_size+")</span>");
    });
    
    /*브랜드 페이지 네이게이션 호버*/
   /*
    jQuery('.brand_page .item').hover(function() {
      //호버일때
      jQuery(this).find("a").css("color", "#04A41D");
      jQuery(this).css("border-bottom", "2px solid #04A41D");
    }, function(){
      //평상시  
	  jQuery(this).find("a").css("color", "black");
      jQuery(this).css("border-bottom", "1px solid #bdbdbd");
    });
    */
    /*브랜드 네비게이션 현재위치 표시*/
    var brand_location = window.location.pathname;
    console.log(brand_location);
    if(brand_location == "/brand.html"){
    	jQuery(".brand_page .item:nth-child(1) .line a").css("color", "#04A41D");
        jQuery(".brand_page .item:nth-child(1)").css("border-bottom", "2px solid #04A41D");
    }
    if(brand_location == "/truelap.html"){
    	jQuery(".brand_page .item:nth-child(3) .line a").css("color", "#04A41D");
        jQuery(".brand_page .item:nth-child(3)").css("border-bottom", "2px solid #04A41D");
    }
    
     /*카테고리 네비게이션 현재위치 표시*/
    var cur_location = window.location.pathname;
    cur_location = decodeURIComponent(cur_location);
    cur_location = cur_location.split("/")[3];
    //console.log(cur_location);
    
    // url 에서 parameter 추출
	function getParam(sname) {
			var params = location.search.substr(location.search.indexOf("?") + 1);
			var sval = "";
			params = params.split("&");
			for (var i = 0; i < params.length; i++) {
					temp = params[i].split("=");
					if ([temp[0]] == sname) { sval = temp[1]; }
			}
			return sval;
	}
    var param_location = getParam("cate_no");
    
     //팜듀프레시스
    if(cur_location == "33" || param_location=="33" || cur_location == "25" || param_location=="25" || cur_location == "52" || param_location=="52" || cur_location == "53" || param_location=="53"){
        jQuery(".cate_page .item:nth-child(1) a").css("color", "white");
        jQuery(".cate_page .item:nth-child(1)").css("background", "#57B91B");
        jQuery(".cate_page .item:nth-child(1) a img").attr("src", "//ecimg.cafe24img.com/pg208b80947175089/farmdew1/web/img/cate_icon_farmdew_white.svg");
        jQuery(".cate_title_banner:nth-child(1)").css("display", "none");
        jQuery(".cate_title_banner_freshis").removeClass("m_off");
        jQuery(".cate_title_banner_freshis").css("background-image", "url(//ecimg.cafe24img.com/pg208b80947175089/farmdew1/web/img/m_cate_banner_01_px.png)");
        if(cur_location == "33" || param_location=="33") {
            jQuery(".menuCategory li:nth-child(1)").addClass("selected");
        }
    }
    
    //팜듀
    if(cur_location == "32" || cur_location == "36" || cur_location == "37" || cur_location == "43"  || cur_location=="48" || param_location=="32" 
       || param_location=="36" || param_location=="37" || param_location=="43" || param_location=="48"){
    	jQuery(".cate_page .item:nth-child(2) a").css("color", "white");
        jQuery(".cate_page .item:nth-child(2)").css("background", "#57B91B");
        jQuery(".cate_page .item:nth-child(2) a img").attr("src", "//ecimg.cafe24img.com/pg208b80947175089/farmdew1/web/img/cate_icon_farmdew_white.svg");
        jQuery(".cate_page .item:nth-child(1) img").attr("src", "//ecimg.cafe24img.com/pg208b80947175089/farmdew1/web/img/cate_icon_all.svg");
        jQuery(".cate_page .item:nth-child(4) img").attr("src", "//ecimg.cafe24img.com/pg208b80947175089/farmdew1/web/img/cate_icon_truelap.svg");
        jQuery(".cate_title_banner").css("background-image", "url(//ecimg.cafe24img.com/pg208b80947175089/farmdew1/web/img/m_cate_banner_02_px.png)");	
        jQuery(".menuCategory li").removeClass("selected");
        if(cur_location == "32" || param_location=="32") {
        	jQuery(".menuCategory li:nth-child(1)").addClass("selected");
        }
        if(cur_location == "36" || param_location=="36") {
            jQuery(".menuCategory li:nth-child(1)").addClass("selected");
        }
        if(cur_location == "37" || param_location=="37") {
            jQuery(".menuCategory li:nth-child(1)").addClass("selected");
        }
        if(cur_location == "43" || param_location=="43") {
            jQuery(".menuCategory li:nth-child(2)").addClass("selected");
        }
        if(cur_location == "48" || param_location=="48") {
            jQuery(".menuCategory li:nth-child(3)").addClass("selected");
        }
    }
    //트루랩
    if(cur_location == "46" || cur_location == "44" || param_location == "46" || param_location=="44"){
    	jQuery(".cate_page .item:nth-child(3) a").css("color", "white");
        jQuery(".cate_page .item:nth-child(3)").css("background", "#57B91B");
        jQuery(".cate_page .item:nth-child(3) img").attr("src", "//ecimg.cafe24img.com/pg208b80947175089/farmdew1/web/img/cate_icon_truelap_white.svg");
        jQuery(".cate_page .item:nth-child(1) img").attr("src", "//ecimg.cafe24img.com/pg208b80947175089/farmdew1/web/img/cate_icon_all.svg");
        jQuery(".cate_page .item:nth-child(2) img").attr("src", "//ecimg.cafe24img.com/pg208b80947175089/farmdew1/web/img/cate_icon_farmdew.svg");
 		jQuery(".cate_title_banner").css("background-image", "url(//ecimg.cafe24img.com/pg208b80947175089/farmdew1/web/img/m_cate_banner_03_px.png)");
        jQuery(".cate_title_banner .inner div:nth-child(1)").text("Trulap");
        jQuery(".cate_title_banner .inner div:nth-child(2)").text("진실되고 믿을 수 있는 원료로");
        jQuery(".cate_title_banner .inner div:nth-child(3)").text("연구하는 트루랩을 소개합니다.");
        jQuery(".menuCategory li").removeClass("selected");
        if(cur_location == "46" || param_location == "46") {
        	jQuery(".menuCategory li:nth-child(1)").addClass("selected");
        }
        if(cur_location == "44" || param_location == "44") {
        	jQuery(".menuCategory li:nth-child(1)").addClass("selected");
        }
    }
    
     /*카테고리 준비중*/
    /*jQuery(".cate_page .item:nth-child(3) a").click(function (){
    	alert("준비중입니다.");
    });
    */
    
    
     /*상품상세 구매버튼 활성화*/
    var cur_location_detail = window.location.pathname;
    cur_location_detail = decodeURIComponent(cur_location_detail);
    cur_location_detail = cur_location_detail.split("/")[5];
    console.log("cur_location_detail",cur_location_detail);
    
     if(cur_location_detail != "33"){
        jQuery('#actionCart, #actionWish,#actionCartClone, #actionWishClone').css('display','block'); 
     	jQuery('.custom_buy_btn').css('display','block');
        jQuery('.prdDesc:last-child .ec-base-table.gClearCell').hide();
        jQuery('.xans-product-detail .totalPrice').hide();
        jQuery('#fixedActionButton .ec-base-button').hide(); 
        jQuery('#orderFixArea').css('bottom','-300px');
     }
    if(cur_location_detail === "33"){
    	jQuery('.xans-product-detail .xans-product-detaildesign table tr:last-child td').text('택배배송');
    }
    
    
     /*제품추천*/
    jQuery(".recommend_wrapper .re_content .cont_01 .option").click(function () {
		jQuery(".recommend_wrapper .re_content .cont_01 .option").css("background-color", "#F3FFEC");
        jQuery(".recommend_wrapper .re_content .cont_01 .option").css("color", "#57B91B");
        jQuery(".recommend_wrapper .re_content .cont_01 .option").css("border", "2px solid #58B91C");
        jQuery(".recommend_wrapper .re_content .cont_01 .female img").attr("src", "//ecimg.cafe24img.com/pg208b80947175089/farmdew1/web/img/icon_female.svg");
        jQuery(".recommend_wrapper .re_content .cont_01 .male img").attr("src", "//ecimg.cafe24img.com/pg208b80947175089/farmdew1/web/img/icon_male.svg");
        jQuery(this).css("background-color", "#266300");
        jQuery(this).css("color", "white");
        jQuery(this).css("border", "2px solid #58b91c00");
        
    });
    jQuery(".recommend_wrapper .re_content .cont_02 .option").click(function () {
        jQuery(".recommend_wrapper .re_content .cont_02 .option").css("background-color", "#F3FFEC");
        jQuery(".recommend_wrapper .re_content .cont_02 .option").css("color", "#57B91B");
        jQuery(".recommend_wrapper .re_content .cont_02 .option").css("border", "2px solid #58B91C");        
        jQuery(this).css("background-color", "#266300");
        jQuery(this).css("color", "white");
        jQuery(this).css("border", "2px solid #58b91c00");        
    });
    jQuery(".recommend_wrapper .re_content .cont_03 .option").click(function () {
        jQuery(".recommend_wrapper .re_content .cont_03 .option").css("background-color", "#F3FFEC");
        jQuery(".recommend_wrapper .re_content .cont_03 .option").css("color", "#57B91B");
        jQuery(".recommend_wrapper .re_content .cont_03 .option").css("border", "2px solid #58B91C");        
        jQuery(this).css("background-color", "#266300");
        jQuery(this).css("color", "white");
        jQuery(this).css("border", "2px solid #58b91c00");        
    });
    jQuery(".recommend_wrapper .re_content .cont_04 .option").click(function () {
        jQuery(".recommend_wrapper .re_content .cont_04 .option").css("background-color", "#F3FFEC");
        jQuery(".recommend_wrapper .re_content .cont_04 .option").css("color", "#57B91B");
        jQuery(".recommend_wrapper .re_content .cont_04 .option").css("border", "2px solid #58B91C");
        jQuery(this).css("background-color", "#266300");
        jQuery(this).css("color", "white");
        jQuery(this).css("border", "2px solid #58b91c00");        
    });
    jQuery(".recommend_wrapper .re_content .cont_05 .option").click(function () {
        jQuery(".recommend_wrapper .re_content .cont_05 .option").css("background-color", "#F3FFEC");
        jQuery(".recommend_wrapper .re_content .cont_05 .option").css("color", "#57B91B");
        jQuery(".recommend_wrapper .re_content .cont_05 .option").css("border", "2px solid #58B91C");
        jQuery(this).css("background-color", "#266300");
        jQuery(this).css("color", "white");
        jQuery(this).css("border", "2px solid #58b91c00");
    });
    
    //선택결과 전송
     jQuery(".recommend_wrapper .re_content .cont_01 .option.male").click(function () {
    	sessionStorage.setItem("sex", "male");
    });
     jQuery(".recommend_wrapper .re_content .cont_01 .option.female").click(function () {
    	sessionStorage.setItem("sex", "female");
    });
    
    jQuery(".recommend_wrapper .re_content .cont_02 .option.age_01").click(function () {
    	sessionStorage.setItem("age", "age_01");
    });
    jQuery(".recommend_wrapper .re_content .cont_02 .option.age_02").click(function () {
    	sessionStorage.setItem("age", "age_02");
    });
    jQuery(".recommend_wrapper .re_content .cont_02 .option.age_03").click(function () {
    	sessionStorage.setItem("age", "age_03");
    });
    jQuery(".recommend_wrapper .re_content .cont_02 .option.age_04").click(function () {
    	sessionStorage.setItem("age", "age_04");
    });
    jQuery(".recommend_wrapper .re_content .cont_02 .option.age_05").click(function () {
    	sessionStorage.setItem("age", "age_05");
    });
    
    jQuery(".recommend_wrapper .re_content .cont_03 .option.reason_01").click(function () {
    	sessionStorage.setItem("reason", "reason_01");
        jQuery("#submit").attr("href", "/recommend_result.html?result=01");
    });
    jQuery(".recommend_wrapper .re_content .cont_03 .option.reason_02").click(function () {
    	sessionStorage.setItem("reason", "reason_02");
        jQuery("#submit").attr("href", "/recommend_result.html?result=02");
    });
    jQuery(".recommend_wrapper .re_content .cont_03 .option.reason_03").click(function () {
    	sessionStorage.setItem("reason", "reason_03");
        jQuery("#submit").attr("href", "/recommend_result.html?result=03");
    });
    jQuery(".recommend_wrapper .re_content .cont_03 .option.reason_04").click(function () {
    	sessionStorage.setItem("reason", "reason_04");
        jQuery("#submit").attr("href", "/recommend_result.html?result=04");
    });
    jQuery(".recommend_wrapper .re_content .cont_03 .option.reason_05").click(function () {
    	sessionStorage.setItem("reason", "reason_05");
        jQuery("#submit").attr("href", "/recommend_result.html?result=05");
    });
    
    jQuery(".recommend_wrapper .re_content .cont_04 .option.pattern_01").click(function () {
    	sessionStorage.setItem("pattern", "pattern_01");
    });
    jQuery(".recommend_wrapper .re_content .cont_04 .option.pattern_02").click(function () {
    	sessionStorage.setItem("pattern", "pattern_02");
    });
    jQuery(".recommend_wrapper .re_content .cont_04 .option.pattern_03").click(function () {
    	sessionStorage.setItem("pattern", "pattern_03");
    });
    jQuery(".recommend_wrapper .re_content .cont_04 .option.pattern_04").click(function () {
    	sessionStorage.setItem("pattern", "pattern_04");
    });
    jQuery(".recommend_wrapper .re_content .cont_04 .option.pattern_05").click(function () {
    	sessionStorage.setItem("pattern", "pattern_05");
    });
    jQuery(".recommend_wrapper .re_content .cont_04 .option.pattern_06").click(function () {
    	sessionStorage.setItem("pattern", "pattern_06");
    });
    
    jQuery(".recommend_wrapper .re_content .cont_05 .option.ingre_01").click(function () {
        sessionStorage.setItem("ingre", "ingre_01");
    });
    jQuery(".recommend_wrapper .re_content .cont_05 .option.ingre_02").click(function () {
        sessionStorage.setItem("ingre", "ingre_02");
    });
    jQuery(".recommend_wrapper .re_content .cont_05 .option.ingre_03").click(function () {
        sessionStorage.setItem("ingre", "ingre_03");
    });
    jQuery(".recommend_wrapper .re_content .cont_05 .option.ingre_04").click(function () {
        sessionStorage.setItem("ingre", "ingre_04");
    });
    jQuery(".recommend_wrapper .re_content .cont_05 .option.ingre_05").click(function () {
        sessionStorage.setItem("ingre", "ingre_05");
    });
     jQuery(".recommend_wrapper .re_content .cont_05 .option.ingre_06").click(function () {
        sessionStorage.setItem("ingre", "ingre_06");
    });
    
    
     jQuery(".recommend_wrapper #submit").click(function () {
         var sex = sessionStorage.getItem("sex");
         var age = sessionStorage.getItem("age");
         var reason = sessionStorage.getItem("reason");
         var pattern = sessionStorage.getItem("pattern");
         var ingre = sessionStorage.getItem("ingre");
         
         if(!sex || !age || !reason || !pattern || !ingre ){
			alert("모든 질문에 답해주세요!");
             return;
         }
         
        if(reason == "reason_01"){
            sessionStorage.removeItem("sex");
        	window.location.href="/recommend_result.html?result=01"
        }
         else if(reason == "reason_02"){
            sessionStorage.removeItem("age");             
             window.location.href="/recommend_result.html?result=02"
         }
         else if(reason == "reason_03"){
            sessionStorage.removeItem("reason");             
             window.location.href="/recommend_result.html?result=03"
         }
         else if(reason == "reason_04"){
            sessionStorage.removeItem("pattern");             
             window.location.href="/recommend_result.html?result=04"
         }
         else if(reason == "reason_05"){
            sessionStorage.removeItem("ingre");             
             window.location.href="/recommend_result.html?result=05"
         }
        
    });
    
     //선택결과보기
     function getParam(sname) {
	    var params = location.search.substr(location.search.indexOf("?") + 1);
	    var sval = "";
	    params = params.split("&");
	    for (var i = 0; i < params.length; i++) {
        	temp = params[i].split("=");
        	if ([temp[0]] == sname) { sval = temp[1]; }
     	}
		return sval;
	 }
     var query_result = getParam("result");
    if(query_result == "01") {
        jQuery(".recommend_result_wrapper .cont").hide();
        jQuery(".recommend_result_wrapper .cont_01").show();
    }
    if(query_result == "02") {
        jQuery(".recommend_result_wrapper .cont").hide();
        jQuery(".recommend_result_wrapper .cont_02").show();
    }
    if(query_result == "03") {
        jQuery(".recommend_result_wrapper .cont").hide();
        jQuery(".recommend_result_wrapper .cont_03").show();
    }
    if(query_result == "04") {
        jQuery(".recommend_result_wrapper .cont").hide();
        jQuery(".recommend_result_wrapper .cont_04").show();
    }
    if(query_result == "05") {
        jQuery(".recommend_result_wrapper .cont").hide();
        jQuery(".recommend_result_wrapper .cont_05").show();
    }
    
    /*상품상세 페이지*/
    jQuery(".custom_buy_btn").click(function(){
        var _prd_name = jQuery(".xans-product-detail h1.name").text();
        _prd_name = _prd_name.trim();
        sessionStorage.setItem("order_product",_prd_name);
        window.location.href="/farmdew_order.html";
    });
    
    /*상품상세 정보표시*/
    var info_stock = jQuery(".xans-product-detaildesign .table2 tr[rel='상품간략설명'] span").text();
    var info_del = jQuery(".xans-product-detaildesign .table2 tr[rel='자체상품코드'] span").text();
    jQuery(".xans-product-detaildesign .table2 tr[rel='보관방법'] .m_item").text(info_stock);
    jQuery(".xans-product-detaildesign .table2 tr[rel='배송정보'] .m_item").text(info_del);
    
    /*주문페이지*/
     function change_product(){
        jQuery("#product").on("propertychange change keyup paste input", function(){
            var val_product = $("#product").val();
            //console.log(val_product);
            sessionStorage.setItem('order_product',val_product);
        });
     }
     function change_name(){
        jQuery("#name").on("propertychange change keyup paste input", function(){
            var val_name = $("#name").val();
            //console.log(val_name);
            sessionStorage.setItem('order_name',val_name);
        });
     }
    function change_tel(){
        jQuery("#tel").on("propertychange change keyup paste input", function(){
            var val_tel = $("#tel").val();
            //console.log(val_tel);
            sessionStorage.setItem('order_tel',val_tel);
        });
     }
    function change_age(){
        jQuery("#age").on("propertychange change keyup paste input", function(){
            var val_age = $("#age").val();
            //console.log(val_age);
            if(val_age){
	            sessionStorage.setItem('order_age',val_age);
            }
        });
     }
    function change_detailAddress(){
        jQuery("#detailAddress").on("propertychange change keyup paste input", function(){
            var val_detailAddress = jQuery("#detailAddress").val();
            //console.log(val_name);
            sessionStorage.setItem('order_detailAddress',val_detailAddress);
        });
     }
    function change_comment(){
        jQuery("#comment").on("propertychange change keyup paste input", function(){
            var val_comment = $("#comment").val();
            //console.log(val_comment);
            sessionStorage.setItem('order_comment',val_comment);
        });
     }
    
    jQuery('.order_wrapper input[type="checkbox"][name="place"]').click(function(){
         if(jQuery(this).prop('checked')){ 
             jQuery('input[type="checkbox"][name="place"]').prop('checked',false);
             jQuery(this).prop('checked',true);
             sessionStorage.setItem("order_place",jQuery(this).val());
         }
    });
    jQuery(document).on("keyup", "#tel", function() { 
		jQuery(this).val( jQuery(this).val().replace(/[^0-9]/g, "").replace(/(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})$/,"$1-$2-$3").replace("--", "-") );
	});
    
    
    change_product();    
    change_name();
    change_tel();
    change_detailAddress();
    change_age();
    change_comment();
    
    jQuery('.order_wrapper .submit').click(function (){
        var order_product = sessionStorage.getItem("order_product");
        var order_name = sessionStorage.getItem("order_name");
        var order_tel = sessionStorage.getItem("order_tel");
        var order_addr = sessionStorage.getItem("order_addr");
        var order_postcode = sessionStorage.getItem("order_postcode");        
        var order_sido = sessionStorage.getItem("order_sido");
        var order_sigungu = sessionStorage.getItem("order_sigungu");
        var order_bname = sessionStorage.getItem("order_bname"); 
        var order_detailAddress = sessionStorage.getItem("order_detailAddress");
        var order_age = sessionStorage.getItem("order_age");
        var order_place = sessionStorage.getItem("order_place");        
        var order_comment = sessionStorage.getItem("order_comment");      
        
    	if(!order_name){alert("성함을 입력해주세요"); return}
        
        function telValidator(args) {
            if (/^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}/.test(args)) {
                return true;
            }
            return false;
        }
        
        if(!telValidator(order_tel)) {
            alert('핸드폰 번호를 확인 해주세요');
            return;
        }
        
        if(!order_addr){alert("배달 받을 주소를 입력해주세요"); return}
        if(!order_age){alert("연령대를 입력해주세요"); return}
        if(!order_place){alert("받을 곳을 선택해주세요"); return}
        
        $.ajax({
        	url : "https://hooks.zapier.com/hooks/catch/13032038/bqd8evd/",
    		type : "post",
    		dataType: "json",
    		data: {
                'order_product':order_product,
    			'order_name':order_name,
    			'order_tel':order_tel,                
    			'order_sido':order_sido,
    			'order_sigungu':order_sigungu,
    			'order_bname':order_bname,
                'order_postcode' : order_postcode,
    			'order_address':order_addr,
    			'order_detailAddress':order_detailAddress,
    			'order_age':order_age,
    			'order_place':order_place,
                'order_comment':order_comment,
    		},
    		success:function(data) {
    			//console.log("send to zapier");
                window.location.href = '/farmdew_order_result.html';
    		},
    		error: function(errorThrown){
    		    alert("문제가 발생했습니다");
    		}
	    });
    });
    
    
    
});