window.addEventListener('DOMContentLoaded', function () {


    gsap.registerPlugin(ScrollTrigger);

    const stage = document.querySelector('#container');
    const container = Scrollbar.init(stage, {
        damping: 0.1,
        delegateTo: stage,
        continuousScrolling: true,
        alwaysShowTracks: false,
    });
    container.setPosition(0, 0);
    container.track.xAxis.element.remove();
    // Scrollbar.detachStyle();



    ScrollTrigger.scrollerProxy("body", {

        scrollTop(value) {

            if (arguments.length) {
                container.scrollTop = value;
            }

            return container.scrollTop;

        }
    });




    setTimeout(function() {
       $('.s1_title').addClass('on');
      }, 500);
    

    container.addListener((e) => {

        let scrollTop = container.scrollTop;
        console.log(scrollTop);


        $('.box1').css('transform', `translateY(${scrollTop * 0.7}px)`)




	if(scrollTop >= 0){

  
        }



	if(scrollTop >= 56){

            $('.zombie1').addClass('on');
        }



	if(scrollTop >= 1184){

            $('.zombie2').addClass('on');
        }



	if(scrollTop >= 1027){

            $('.zombie3').addClass('on');
        }

	
	if(scrollTop >= 600){

            $('.zombie4').addClass('on');
        }


	if(scrollTop >= 1500){

            $('.mockup').addClass('on');
        }


	if(scrollTop >= 1300){

            $('.naverapp').addClass('on');
        }


	if(scrollTop >= 1750){

            $('.object3').addClass('on');
        }

	if(scrollTop >= 1750){

            $('.object1').addClass('on');
        }

	if(scrollTop >= 1750){

            $('.object2').addClass('on');
        }


	if(scrollTop >= 1600){

            $('.object4').addClass('on');
        }


	if(scrollTop >= 1600){

            $('.object5').addClass('on');
        }


	if(scrollTop >= 1550){

            $('.section2_line').addClass('on');
        }


	if(scrollTop >= 2200){

            $('.expertise').addClass('on');
        }


	if(scrollTop >= 2300){

            $('.s2_title1').addClass('on');
        }


	if(scrollTop >= 2360){

            $('.s2_title2').addClass('on');
        }


	if(scrollTop >= 2450){

            $('.s2_title3').addClass('on');
        }


	if(scrollTop >= 2200){

            $('.s2_illust1').addClass('jello-horizontal');
        }



	if(scrollTop >= 2100){

            $('.s2_illust2').addClass('jello-horizontal');
        }

	

	if(scrollTop >= 2700){

            $('.small_typho1').addClass('on');
        }
	


	if(scrollTop >= 2700){

            $('.small_typho2').addClass('on');
        }
	

	
	if(scrollTop >= 3600){

            $('.s3_mockup').addClass('on');
        }
	

	
	if(scrollTop >= 3300){

            $('.s3_line1').addClass('on');
        }


	if(scrollTop >= 3400){

            $('.s3_line2').addClass('on');
        }	


	if(scrollTop >= 3500){

            $('.s3_over').addClass('on');
        }


	if(scrollTop >= 3550){

            $('.s3_view').addClass('on');
        }



	if(scrollTop >= 3200){

            $('.hashtag').addClass('on');
        }



	if(scrollTop >= 3800){

            $('.s3_object1').addClass('on');
        }


	if(scrollTop >= 3900){

            $('.s3_object2').addClass('on');
        }



	if(scrollTop >= 4520){

            $('.s3_title1').addClass('on');
        }



	if(scrollTop >= 4540){

            $('.s3_title2').addClass('on');
        }



	if(scrollTop >= 4600){

            $('.s3_detail1').addClass('on');
        }



	if(scrollTop >= 4700){

            $('.s3_detail2').addClass('on');
        }


    
	if(scrollTop >= 4650){

            $('.s3_line3').addClass('on');
        }



	if(scrollTop >= 5200){

            $('.s4_title1').addClass('on');
        }


	if(scrollTop >= 5320){

            $('.s4_title2').addClass('on');
        }


	
	if(scrollTop >= 5380){

            $('.s4_title3').addClass('on');
        }


	
	if(scrollTop >= 5420){

            $('.s4_title4').addClass('on');
        }



	if(scrollTop >= 5600){

            $('.s4_sub1').addClass('on');
        }



	if(scrollTop >= 5650){

            $('.s4_sub2').addClass('on');
        }



	if(scrollTop >= 5700){

            $('.s4_sub3').addClass('on');
        }



	if(scrollTop >= 6100){

            $('.s4_icon1').addClass('on');
        }



	if(scrollTop >= 5900){

            $('.s4_graph1').addClass('on');
        }



	if(scrollTop >= 5950){

            $('.s4_graph2').addClass('on');
        }



	if(scrollTop >= 6000){

            $('.s4_graph3').addClass('on');
        }



	if(scrollTop >= 6030){

            $('.s4_graph4').addClass('on');
        }



	if(scrollTop >= 6060){

            $('.s4_graph5').addClass('on');
        }


	if(scrollTop >= 6080){

            $('.s4_graph6').addClass('on');
        }


	if(scrollTop >= 6100){

            $('.s4_graph7').addClass('on');
        }



	if(scrollTop >= 6120){

            $('.s4_graph8').addClass('on');
        }



	if(scrollTop >= 6140){

            $('.s4_graph9').addClass('on');
        }



	if(scrollTop >= 6160){

            $('.s4_graph10').addClass('on');
        }



	if(scrollTop >= 6230){

            $('.s4_sub4').addClass('on');
        }


	if(scrollTop >= 6250){

            $('.s4_sub5').addClass('on');
        }


	if(scrollTop >= 6280){

            $('.s4_sub6').addClass('on');
        }


	if(scrollTop >= 6330){

            $('.s4_graph11').addClass('on');
        }


	if(scrollTop >= 6350){

            $('.s4_graph12').addClass('on');
        }



	if(scrollTop >= 6370){

            $('.s4_graph13').addClass('on');
        }


	if(scrollTop >= 6390){

            $('.s4_graph14').addClass('on');
        }


	if(scrollTop >= 6410){

            $('.s4_graph15').addClass('on');
        }


	if(scrollTop >= 6350){

            $('.s4_graph16').addClass('on');
        }


	if(scrollTop >= 6430){

            $('.s4_graph17').addClass('on');
        }


	if(scrollTop >= 6450){

            $('.s4_graph18').addClass('on');
        }


	if(scrollTop >= 6470){

            $('.s4_graph19').addClass('on');
        }


	if(scrollTop >= 6490){

            $('.s4_graph20').addClass('on');
        }


	if(scrollTop >= 6700){

            $('.s4_sub7').addClass('on');
        }


	if(scrollTop >= 6730){

            $('.s4_sub8').addClass('on');
        }


	if(scrollTop >= 6760){

            $('.s4_sub9').addClass('on');
        }


	if(scrollTop >= 6800){

            $('.s4_icon2').addClass('on');
        }


	if(scrollTop >= 6860){

            $('.s4_graph21').addClass('on');
        }



	if(scrollTop >= 6820){

            $('.s4_graph22').addClass('on');
        }



	if(scrollTop >= 6900){

            $('.s4_graph23').addClass('on');
        }


	if(scrollTop >= 6960){

            $('.s4_graph24').addClass('on');
        }


	if(scrollTop >= 6930){

            $('.s4_icon3').addClass('on');
        }


	if(scrollTop >= 7000){

            $('.s4_graph25').addClass('on');
        }


	if(scrollTop >= 7060){

            $('.s4_graph26').addClass('on');
        }



	if(scrollTop >= 7030){

            $('.s4_icon4').addClass('on');
        }


	if(scrollTop >= 7600){

            $('.s5_title1').addClass('on');
        }



	if(scrollTop >= 7620){

            $('.s5_title2').addClass('on');
        }


	if(scrollTop >= 7750){

            $('.s5_title3').addClass('on');
        }


	if(scrollTop >= 7770){

            $('.s5_title4').addClass('on');
        }



	if(scrollTop >= 7750){

            $('.s5_icon1').addClass('on');
        }


	if(scrollTop >= 7800){

            $('.s5_icon2').addClass('on');
        }




	if(scrollTop >= 8000){

            $('.s5_sub1').addClass('on');
        }


	if(scrollTop >= 8030){

            $('.s5_sub2').addClass('on');
        }



	if(scrollTop >= 8080){

            $('.s5_sub3').addClass('on');
        }



	if(scrollTop >= 8060){

            $('.s5_sub4').addClass('on');
        }



	if(scrollTop >= 8090){

            $('.s5_sub5').addClass('on');
        }


	if(scrollTop >= 7960){

            $('.s5_line1').addClass('on');
        }


	if(scrollTop >= 7980){

            $('.s5_sub6').addClass('on');
        }


	if(scrollTop >= 8000){

            $('.s5_sub7').addClass('on');
        }


	if(scrollTop >= 8030){

            $('.s5_sub9').addClass('on');
        }


	if(scrollTop >= 8060){

            $('.s5_sub8').addClass('on');
        }


	if(scrollTop >= 8090){

            $('.s5_sub10').addClass('on');
        }


	if(scrollTop >= 8120){

            $('.s5_line2').addClass('on');
        }


	if(scrollTop >= 8150){

            $('.s5_sub11').addClass('on');
        }


	if(scrollTop >= 8180){

            $('.s5_sub12').addClass('on');
        }



	if(scrollTop >= 8210){

            $('.s5_sub14').addClass('on');
        }


	if(scrollTop >= 8240){

            $('.s5_sub13').addClass('on');
        }


	if(scrollTop >= 8270){

            $('.s5_sub15').addClass('on');
        }


	if(scrollTop >= 8680){

            $('.s5_graph1').addClass('on');
        }


	if(scrollTop >= 8680){

            $('.s5_graph2').addClass('on');
        }


	if(scrollTop >= 8680){

            $('.s5_graph3').addClass('on');
        }


	if(scrollTop >= 8750){

            $('.s5_graph4').addClass('on');
        }


	if(scrollTop >= 8770){

            $('.s5_graph5').addClass('on');
        }


	if(scrollTop >= 8790){

            $('.s5_illust1').addClass('on');
        }


	if(scrollTop >= 8800){

            $('.s5_heart1').addClass('on');
        }


	if(scrollTop >= 8800){

            $('.s5_heart2').addClass('on');
        }


	if(scrollTop >= 8810){

            $('.s5_graph19').addClass('on');
        }


	if(scrollTop >= 8820){

            $('.s5_graph20').addClass('on');
        }


	if(scrollTop >= 8820){

            $('.s5_graph21').addClass('on');
        }


	if(scrollTop >= 8820){

            $('.s5_graph6').addClass('on');
        }


	if(scrollTop >= 8840){

            $('.s5_graph7').addClass('on');
        }



	if(scrollTop >= 8860){

            $('.s5_graph8').addClass('on');
        }


	if(scrollTop >= 8870){

            $('.s5_illust2').addClass('on');
        }



	if(scrollTop >= 8870){

            $('.s5_graph22').addClass('on');
        }



	if(scrollTop >= 8870){

            $('.s5_graph9').addClass('on');
        }


	if(scrollTop >= 8890){

            $('.s5_graph10').addClass('on');
        }


	if(scrollTop >= 8910){

            $('.s5_graph11').addClass('on');
        }


	if(scrollTop >= 8920){

            $('.s5_illust3').addClass('on');
        }


	if(scrollTop >= 8920){

            $('.s5_angry1').addClass('on');
        }


	if(scrollTop >= 8925){

            $('.s5_angry2').addClass('on');
        }


	if(scrollTop >= 8935){

            $('.s5_graph12').addClass('on');
        }


	if(scrollTop >= 8960){

            $('.s5_graph13').addClass('on');
        }


	if(scrollTop >= 8980){

            $('.s5_graph14').addClass('on');
        }


	if(scrollTop >= 9000){

            $('.s5_graph23').addClass('on');
        }


	if(scrollTop >= 9020){

            $('.s5_illust4').addClass('on');
        }


	if(scrollTop >= 9030){

            $('.s5_graph15').addClass('on');
        }


	if(scrollTop >= 9050){

            $('.s5_graph16').addClass('on');
        }


	if(scrollTop >= 9070){

            $('.s5_graph17').addClass('on');
        }


	if(scrollTop >= 9070){

            $('.s5_graph24').addClass('on');
        }


	if(scrollTop >= 9080){

            $('.s5_illust5').addClass('on');
        }


	if(scrollTop >= 9000){

            $('.s5_graph25').addClass('on');
        }


	if(scrollTop >= 9050){

            $('.s5_graph26').addClass('on');
        }


	if(scrollTop >= 9050){

            $('.s5_graph27').addClass('on');
        }


	if(scrollTop >= 9150){

            $('.s5_angry3').addClass('on');
        }


	if(scrollTop >= 9150){

            $('.s5_angry4').addClass('on');
        }



	if(scrollTop >= 9150){

            $('.s5_angry5').addClass('on');
        }


	if(scrollTop >= 9150){

            $('.s5_angry6').addClass('on');
        }


	if(scrollTop >= 9180){

            $('.s5_graph28').addClass('on');
        }


	if(scrollTop >= 9070){

            $('.s5_graph28').addClass('on');
        }


	if(scrollTop >= 9880){

            $('.s6_illust1').addClass('on');
        }


	if(scrollTop >= 9800){

            $('.s6_title1').addClass('on');
        }



	if(scrollTop >= 9830){

            $('.s6_title2').addClass('on');
        }




	if(scrollTop >= 9860){

            $('.s6_title3').addClass('on');
        }



	if(scrollTop >= 9920){

            $('.s6_title4').addClass('on');
        }



	if(scrollTop >= 9950){

            $('.s6_title5').addClass('on');
        }



	if(scrollTop >= 10300){

            $('.s6_title6').addClass('on');
        }


	if(scrollTop >= 10320){

            $('.s6_hashtag').addClass('on');
        }


	if(scrollTop >= 10800){

            $('.s6_sub1').addClass('on');
        }


	if(scrollTop >= 10830){

            $('.s6_sub2').addClass('on');
        }



	if(scrollTop >= 10860){

            $('.s6_sub3').addClass('on');
        }


	if(scrollTop >= 10890){

            $('.s6_sub4').addClass('on');
        }


	if(scrollTop >= 11000){

            $('.s6_mockup').addClass('on');
        }


	if(scrollTop >= 11050){

            $('.s6_screen1').addClass('on');
        }


	if(scrollTop >= 11060){

            $('.s6_screen2').addClass('on');
        }


	if(scrollTop >= 11070){

            $('.s6_screen3').addClass('on');
        }


	if(scrollTop >= 11200){

            $('.s6_object1').addClass('wobble-ver-left');
        }


	if(scrollTop >= 11700){

            $('.s7_illust1').addClass('on');
        }


	if(scrollTop >= 12100){

            $('.s7_title1').addClass('on');
        }


	if(scrollTop >= 12120){

            $('.s7_title2').addClass('on');
        }


	if(scrollTop >= 12140){

            $('.s7_title3').addClass('on');
        }


	if(scrollTop >= 12160){

            $('.s7_title4').addClass('on');
        }


	if(scrollTop >= 12500){

            $('.s7_icon1').addClass('on');
        }


	if(scrollTop >= 12530){

            $('.s7_sub1').addClass('on');
        }


	if(scrollTop >= 12540){

            $('.s7_sub2').addClass('on');
        }


	if(scrollTop >= 12550){

            $('.s7_sub3').addClass('on');
        }


	if(scrollTop >= 12560){

            $('.s7_sub4').addClass('on');
        }


	if(scrollTop >= 12570){

            $('.s7_sub5').addClass('on');
        }


	if(scrollTop >= 12580){

            $('.s7_sub6').addClass('on');
        }


	if(scrollTop >= 12590){

            $('.s7_sub7').addClass('on');
        }



	if(scrollTop >= 12600){

            $('.s7_sub8').addClass('on');
        }


	if(scrollTop >= 12610){

            $('.s7_sub9').addClass('on');
        }


	if(scrollTop >= 12620){

            $('.s7_sub10').addClass('on');
        }


	if(scrollTop >= 12630){

            $('.s7_sub11').addClass('on');
        }


	if(scrollTop >= 12650){

            $('.s7_icon2').addClass('on');
        }


	if(scrollTop >= 12670){

            $('.s7_sub12').addClass('on');
        }


	if(scrollTop >= 12680){

            $('.s7_sub13').addClass('on');
        }


	if(scrollTop >= 12690){

            $('.s7_sub14').addClass('on');
        }


	if(scrollTop >= 12700){

            $('.s7_sub15').addClass('on');
        }


	if(scrollTop >= 12720){

            $('.s7_sub16').addClass('on');
        }


	if(scrollTop >= 12730){

            $('.s7_sub17').addClass('on');
        }


	if(scrollTop >= 12740){

            $('.s7_sub18').addClass('on');
        }


	if(scrollTop >= 12750){

            $('.s7_sub19').addClass('on');
        }


	if(scrollTop >= 12760){

            $('.s7_sub20').addClass('on');
        }


	if(scrollTop >= 12770){

            $('.s7_sub21').addClass('on');
        }


	if(scrollTop >= 12780){

            $('.s7_sub22').addClass('on');
        }



	if(scrollTop >= 13000){

            $('.s7_graph1').addClass('on');
        }


	if(scrollTop >= 13200){

            $('.s7_graph2').addClass('on');
        }


	if(scrollTop >= 13330){

            $('.s7_graph3').addClass('on');
        }


	if(scrollTop >= 13500){

            $('.s7_title5').addClass('on');
        }


	if(scrollTop >= 13530){

            $('.s7_title6').addClass('on');
        }


	if(scrollTop >= 13700){

            $('.s7_detail1').addClass('on');
        }


	if(scrollTop >= 13740){

            $('.s7_detail2').addClass('on');
        }


	if(scrollTop >= 13780){

            $('.s7_detail3').addClass('on');
        }


	if(scrollTop >= 13810){

            $('.s7_detail4').addClass('on');
        }


	if(scrollTop >= 13840){

            $('.s7_detail5').addClass('on');
        }


	if(scrollTop >= 13870){

            $('.s7_detail6').addClass('on');
        }


	if(scrollTop >= 13900){

            $('.s7_detail7').addClass('on');
        }


	if(scrollTop >= 13940){

            $('.s7_detail8').addClass('on');
        }


	if(scrollTop >= 13980){

            $('.s7_detail9').addClass('on');
        }


	if(scrollTop >= 14010){

            $('.s7_detail10').addClass('on');
        }



	if(scrollTop >= 14050){

            $('.s7_detail11').addClass('on');
        }


	if(scrollTop >= 14090){

            $('.s7_detail12').addClass('on');
        }


	if(scrollTop >= 14130){

            $('.s7_detail13').addClass('on');
        }


	if(scrollTop >= 14170){

            $('.s7_detail14').addClass('on');
        }


	if(scrollTop >= 14650){

            $('.s8_title1').addClass('on');
        }


	if(scrollTop >= 14750){

            $('.s8_illust1').addClass('on');
        }


	if(scrollTop >= 15000){

            $('.s8_illust2').addClass('on');
        }


	if(scrollTop >= 15100){

            $('.s8_illust3').addClass('on');
        }


	if(scrollTop >= 14750){

            $('.s8_illust4').addClass('on');
        }



	if(scrollTop >= 15100){

            $('.s8_illust5').addClass('on');
        }


	if(scrollTop >= 15100){

            $('.s8_illust6').addClass('on');
        }


	if(scrollTop >= 14500){

            $('.s8_illust7').addClass('on');
        }


	if(scrollTop >= 15200){

            $('.s8_illust8').addClass('on');
        }


	if(scrollTop >= 15220){

            $('.s8_illust9').addClass('on');
        }



	if(scrollTop >= 15000){

            $('.s8_illust10').addClass('on');
        }


	if(scrollTop >= 15250){

            $('.s8_illust11').addClass('on');
        }


	if(scrollTop >= 16160){

            $('.s9_title1').addClass('on');
        }


	if(scrollTop >= 16200){

            $('.s9_title2').addClass('on');
        }


	if(scrollTop >= 16230){

            $('.s9_title3').addClass('on');
        }


	if(scrollTop >= 16240){

            $('.s9_hashtag1').addClass('on');
        }



	if(scrollTop >= 16600){

            $('.s9_mockup1').addClass('on');
        }


	if(scrollTop >= 16480){

            $('.s9_object1').addClass('on');
        }


	if(scrollTop >= 16700){

            $('.s9_sub1').addClass('on');
        }


	if(scrollTop >= 16760){

            $('.s9_sub2').addClass('on');
        }



	if(scrollTop >= 16800){

            $('.s9_sub3').addClass('on');
        }


	if(scrollTop >= 16920){

            $('.s9_object2').addClass('shake-bottom');
        }



	if(scrollTop >= 17580){

            $('.s9_mockup2').addClass('on');
        }


	if(scrollTop >= 17800){

            $('.s9_sub4').addClass('on');
        }


	if(scrollTop >= 17860){

            $('.s9_sub5').addClass('on');
        }



	if(scrollTop >= 17930){

            $('.s9_sub6').addClass('on');
        }



	if(scrollTop >= 17990){

            $('.s9_object3').addClass('shake-bottom');
        }



	if(scrollTop >= 18030){

            $('.s9_object4').addClass('shake-bottom');
        }



	if(scrollTop >= 18680){

            $('.s9_title4').addClass('on');
        }


	if(scrollTop >= 18730){

            $('.s9_title5').addClass('on');
        }


	if(scrollTop >= 18780){

            $('.s9_title6').addClass('on');
        }



	if(scrollTop >= 18880){

            $('.s9_mockup3').addClass('on');
        }


	if(scrollTop >= 18850){

            $('.s9_object5').addClass('shake-bottom');
        }


	if(scrollTop >= 19050){

            $('.s9_screen1').addClass('on');
        }



	if(scrollTop >= 19100){

            $('.s9_screen2').addClass('on');
        }



	if(scrollTop >= 19150){

            $('.s9_screen3').addClass('on');
        }


	if(scrollTop >= 19500){

            $('.s9_screen1-1').addClass('on');
        }


	if(scrollTop >= 19580){

            $('.s9_screen1-2').addClass('on');
        }


	if(scrollTop >= 19660){

            $('.s9_screen1-3').addClass('on');
        }


	if(scrollTop >= 19800){

            $('.s9_hashtag2').addClass('on');
        }


	if(scrollTop >= 19870){

            $('.s9_sub7').addClass('on');
        }




	if(scrollTop >= 19980){

            $('.s9_sub8').addClass('on');
        }


	if(scrollTop >= 20030){

            $('.s9_sub9').addClass('on');
        }



	if(scrollTop >= 20800){

            $('.s10_title1').addClass('on');
        }


	if(scrollTop >= 20860){

            $('.s10_title2').addClass('on');
        }


	if(scrollTop >= 20950){

            $('.s10_sub1').addClass('on');
        }



	if(scrollTop >= 20980){

            $('.s10_sub2').addClass('on');
        }



	if(scrollTop >= 21120){

            $('.s10_sub3').addClass('on');
        }



	if(scrollTop >= 21150){

            $('.s10_sub4').addClass('on');
        }


	if(scrollTop >= 21180){

            $('.s10_sub5').addClass('on');
        }


	if(scrollTop >= 21210){

            $('.s10_sub6').addClass('on');
        }



	if(scrollTop >= 21240){

            $('.s10_sub7').addClass('on');
        }


	if(scrollTop >= 21270){

            $('.s10_sub8').addClass('on');
        }


	if(scrollTop >= 21300){

            $('.s10_sub9').addClass('on');
        }


	if(scrollTop >= 21360){

            $('.s10_sub10').addClass('on');
        }




	if(scrollTop >= 21360){

            $('.s10_sub11').addClass('on');
        }


	if(scrollTop >= 21390){

            $('.s10_sub12').addClass('on');
        }


	if(scrollTop >= 21410){

            $('.s10_sub13').addClass('on');
        }


	if(scrollTop >= 21450){

            $('.s10_sub14').addClass('on');
        }



	if(scrollTop >= 21370){

            $('.s10_sub15').addClass('on');
        }


	if(scrollTop >= 21200){

            $('.s10_line1').addClass('on');
        }



	if(scrollTop >= 21380){

            $('.s10_line2').addClass('on');
        }



	if(scrollTop >= 21500){

            $('.s10_detail1').addClass('on');
        }



	if(scrollTop >= 21530){

            $('.s10_detail2').addClass('on');
        }



	if(scrollTop >= 21560){

            $('.s10_detail3').addClass('on');
        }



	if(scrollTop >= 21580){

            $('.s10_detail4').addClass('on');
        }



	if(scrollTop >= 21980){

            $('.s11_title1').addClass('on');
        }



	if(scrollTop >= 22300){

            $('.s11_title2').addClass('on');
        }



	if(scrollTop >= 22500){

            $('.s11_title3').addClass('on');
        }



	if(scrollTop >= 22580){

            $('.s11_title4').addClass('on');
        }


	if(scrollTop >= 22780){

            $('.s11_title5').addClass('on');
        }


	if(scrollTop >= 22840){

            $('.s11_title6').addClass('on');
        }


	if(scrollTop >= 22890){

            $('.s11_title7').addClass('on');
        }


	if(scrollTop >= 23150){

            $('.s11_title8').addClass('on');
        }



	if(scrollTop >= 23220){

            $('.s11_title9').addClass('on');
        }



	if(scrollTop >= 23290){

            $('.s11_title10').addClass('on');
        }


	if(scrollTop >= 23920){

            $('.s12_title1').addClass('on');
        }


	if(scrollTop >= 24060){

            $('.s12_title2').addClass('on');
        }




	if(scrollTop >= 24080){

            $('.s12_title3').addClass('on');
        }




	if(scrollTop >= 24110){

            $('.s12_hashtag1').addClass('on');
        }



	if(scrollTop >= 24140){

            $('.s12_object1').addClass('on');
        }


	if(scrollTop >= 24170){

            $('.s12_object2').addClass('on');
        }


	if(scrollTop >= 23300){

            $('.s12_illust1').addClass('on');
        }


	if(scrollTop >= 24180){

            $('.s12_illust2').addClass('on');
        }



	if(scrollTop >= 24200){

            $('.s12_object5').addClass('on');
        }


	if(scrollTop >= 24350){

            $('.s12_mockup1').addClass('on');
        }



	if(scrollTop >= 24550){

            $('.s12_sub1').addClass('on');
        }



	if(scrollTop >= 24590){

            $('.s12_sub2').addClass('on');
        }



	if(scrollTop >= 24620){

            $('.s12_sub3').addClass('on');
        }


	if(scrollTop >= 24800){

            $('.s12_object3').addClass('on');
        }


	if(scrollTop >= 24890){

            $('.s12_object4').addClass('on');
        }


	if(scrollTop >= 25000){

            $('.s12_illust3').addClass('jello-horizontal');
        }



	if(scrollTop >= 24930){

            $('.s12_line1').addClass('on');
        }




	if(scrollTop >= 25670){

            $('.s12_sub4').addClass('on');
        }


	if(scrollTop >= 25720){

            $('.s12_sub5').addClass('on');
        }



	if(scrollTop >= 25740){

            $('.s12_sub6').addClass('on');
        }



	if(scrollTop >= 26200){

            $('.s12_screen1').addClass('on');
        }



	if(scrollTop >= 26300){

            $('.s12_screen2').addClass('on');
        }


	if(scrollTop >= 26400){

            $('.s12_screen3').addClass('on');
        }



	if(scrollTop >= 27400){

            $('.s12_detail1').addClass('on');
        }



	if(scrollTop >= 27460){

            $('.s12_detail2').addClass('on');
        }


	if(scrollTop >= 27480){

            $('.s12_detail3').addClass('on');
        }


	if(scrollTop >= 27460){

            $('.s12_illust4').addClass('wobble-hor-bottom');
        }


	if(scrollTop >= 25700){

            $('.s12_illust5').addClass('on');
        }


	if(scrollTop >= 28000){

            $('.s13_title1').addClass('on');
        }


	if(scrollTop >= 28020){

            $('.s13_title2').addClass('on');
        }


	if(scrollTop >= 28120){

            $('.s13_title3').addClass('on');
        }


	if(scrollTop >= 28130){

            $('.s13_star1').addClass('on');
        }



	if(scrollTop >= 28140){

            $('.s13_circle1').addClass('on');
        }



	if(scrollTop >= 28150){

            $('.s13_circle2').addClass('on');
        }


	if(scrollTop >= 28170){

            $('.s13_title4').addClass('on');
        }


	if(scrollTop >= 28200){

            $('.s13_object1').addClass('on');
        }


	if(scrollTop >= 28230){

            $('.s13_object2').addClass('on');
        }


	if(scrollTop >= 28530){

            $('.s13_title5').addClass('on');
        }


	if(scrollTop >= 28580){

            $('.s13_title6').addClass('on');
        }



	if(scrollTop >= 28630){

            $('.s13_title7').addClass('on');
        }


	if(scrollTop >= 28730){

            $('.s13_title8').addClass('on');
        }


	if(scrollTop >= 28760){

            $('.s13_title9').addClass('on');
        }


	if(scrollTop >= 28780){

            $('.s13_title10').addClass('on');
        }




	if(scrollTop >= 28810){

            $('.s13_title11').addClass('on');
        }



	if(scrollTop >= 28990){

            $('.s13_object3').addClass('on');
        }



	if(scrollTop >= 29150){

            $('.s13_title12').addClass('on');
        }




	if(scrollTop >= 29220){

            $('.s13_title13').addClass('on');
        }


	if(scrollTop >= 29400){

            $('.s13_title14').addClass('on');
        }


	if(scrollTop >= 29420){

            $('.s13_title15').addClass('on');
        }


	if(scrollTop >= 29440){

            $('.s13_title16').addClass('on');
        }




	if(scrollTop >= 29460){

            $('.s13_title17').addClass('on');
        }


	if(scrollTop >= 29480){

            $('.s13_title18').addClass('on');
        }



	if(scrollTop >= 29500){

            $('.s13_title19').addClass('on');
        }


	if(scrollTop >= 29520){

            $('.s13_title20').addClass('on');
        }


	if(scrollTop >= 29850){

            $('.s13_object4').addClass('on');
        }



	if(scrollTop >= 3020){

            $('.s13_object5').addClass('on');
        }


	if(scrollTop >= 30300){

            $('.s13_mockup1').addClass('on');
        }



	if(scrollTop >= 30500){

            $('.s13_illust1').addClass('on');
        }


	if(scrollTop >= 31200){

            $('.s13_sub1').addClass('on');
        }



	if(scrollTop >= 31250){

            $('.s13_sub2').addClass('on');
        }



	if(scrollTop >= 31290){

            $('.s13_sub3').addClass('on');
        }


	if(scrollTop >= 31330){

            $('.s13_sub4').addClass('on');
        }


	if(scrollTop >= 31500){

            $('.s13_sub5').addClass('on');
        }



	if(scrollTop >= 31400){

            $('.s13_object6').addClass('on');
        }


	if(scrollTop >= 31580){

            $('.s13_object7').addClass('on');
        }


	if(scrollTop >= 31620){

            $('.s13_object8').addClass('on');
        }



	if(scrollTop >= 31640){

            $('.s13_illust2').addClass('on');
        }








    });




    $('.startPoint').click(function () {

        container.scrollTo(0, 0, 600, {
            callback: () => console.log('done!'),
            easing: easing.easeInOutCirc,
        });


    });





    (function () {


        setTimeout(()=>{
            $('.main').addClass('on');
        },1000)
	$('.logo').addClass('on')
 	$('.bg_top').addClass('on');
	 $('.main_title1').addClass('on');
	 $('.main_title2').addClass('on');
	$('.sub_title').addClass('on');
/*

        gsap.to(".box2", {
            x: 400,
            scrollTrigger: {
                trigger: ".box2",
                start: "top center",
                end: "top 100px",
                scrub: 1,
                markers: false,
                id: "scrub"
            }
        });

        gsap.to(".box3", {
            x: 400,
            rotation: 360,
            scrollTrigger: {
                trigger: ".box3",
                start: "top center",
                end: "top 100px",
                scrub: 1,
                markers: true,
                id: "scrub"
            }
        });*/

    })();



})
