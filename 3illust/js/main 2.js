window.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  const stage = document.querySelector("#container");
  const container = Scrollbar.init(stage, {
    damping: 0.1,
    delegateTo: stage,
    continuousScrolling: true,
    alwaysShowTracks: false,
  });
  container.setPosition(0, 0);
  container.track.xAxis.element.remove();

  ScrollTrigger.scrollerProxy("body", {
    scrollTop(value) {
      if (arguments.length) {
        container.scrollTop = value;
      }

      return container.scrollTop;
    },
  });

  container.addListener((e) => {
    let scrollTop = container.scrollTop;
    console.log(scrollTop);


    if (scrollTop >= 400) {
      $(".sec1 .middle").addClass("on");
    }

    if (scrollTop >= 1300) {
      $(".sec2 .tit").addClass("on");
    }

    if (scrollTop >= 2390) {
      $(".sec2 .layer").addClass("on");
    }

    if (scrollTop >= 3100) {
      $(".sec3 .tit").addClass("on");
    }

    if (scrollTop >= 3700) {
      $(".sec3 .center").addClass("on");
    }

    if (scrollTop >= 3700) {
      $(".sec3 .tit1").addClass("on");
    }

    if (scrollTop >= 4300) {
      $(".sec3 .tit2").addClass("on");
    }

    if (scrollTop >= 4600) {
      $(".sec3 .tit3").addClass("on");
    }

    if (scrollTop >= 4800) {
      $(".sec3 .tit4").addClass("on");
    }

    if (scrollTop >= 5500) {
      $(".sec3 .file").addClass("on");
    }

    if (scrollTop >= 6100) {
      $(".sec4 .tit").addClass("on");
    }

    if (scrollTop >= 6300) {
      $(".window .win1").addClass("on");
    }

    if (scrollTop >= 6900) {
      $(".window .win2").addClass("on");
    }

    if (scrollTop >= 7100) {
      $(".window .win3").addClass("on");
    }

    if (scrollTop >= 8000) {
      $(".sec5 .tit").addClass("on");
    }

    if (scrollTop >= 8000) {
      $(".sec5 .glass").addClass("on");
    }

    if (scrollTop >= 8300) {
      $(".sec5 .window").addClass("on");
    }

    if (scrollTop >= 9845) {
      $(".sec6 .tit").addClass("on");
    }

    if (scrollTop >= 11200) {
      $(".sec7 .tit").addClass("on");
    }

    if (scrollTop >= 11200) {
      $(".sec7 .face").addClass("on");
    }

    if (scrollTop >= 11700) {
      $(".sec7 .cardList").addClass("on");
    }

    if (scrollTop >= 13000) {
      $(".sec7 .imgbg").addClass("on");
    }

    if (scrollTop >= 14500) {
      $(".sec7 .tit2").addClass("on");
    }

    if (scrollTop >= 15700) {
      $(".sec7 .window").addClass("on");
    }

    if (scrollTop >= 16900) {
      $(".sec8 .tit").addClass("on");
    }

    if (scrollTop >= 17500) {
      $(".sec8 .mockup").addClass("on");
    }

    if (scrollTop >= 21200) {
      $(".sec8 .mockup2").addClass("on");
    }


    if (scrollTop >= 27600) {
      $(".middle_cir").addClass("on");
    }

    if (scrollTop >= 29600) {
      $(".sec9 .mockup").addClass("on");
    }

    
    if (scrollTop >= 32300) {
      $(".sec9 .mockup2").addClass("on");
    }
    
    if (scrollTop >= 34600) {
      $(".sec9 .mockup3").addClass("on");
    }
    
    if (scrollTop >= 35660) {
      $(".sec9 .mockup4").addClass("on");
    }

    
    if (scrollTop >= 37700) {
      $(".sec10 .people").addClass("on");
    }

    if (scrollTop >= 38000) {
      $(".sec10 .txt").addClass("on");
    }

    if (scrollTop >= 38600) {
      $(".sec10 .inner").addClass("on");
    }

    if (scrollTop >= 38900) {
      $(".sec10 .inner .tit").addClass("on");
    }

    if (scrollTop >= 39500) {
      $(".sec10 .mockup").addClass("on");
    }

    if (scrollTop >= 17000) {
      $(".sec11 .error1").addClass("on");
    }

    if (scrollTop >= 48000) {
      $(".sec11 .error3").addClass("on");
    }

    if (scrollTop >= 49500) {
      $(".sec12 .mock1").addClass("on");
    }

    if (scrollTop >= 55800) {
      $(".sec12 .mock2").addClass("on");
    }

    if (scrollTop >= 57000) {
      $(".sec13").addClass("on");
    }

    if (scrollTop >= 61400) {
      $(".sec14").addClass("on");
    }
  });

  $(function(){
    
    setTimeout(() => {
      $("body").addClass("on");
    }, 300);

    setTimeout(() => {
      $(".sec1").addClass("on");
    }, 500);
    setTimeout(() => {
      $(".sec1").addClass("on2");
    }, 1800);

    const $rollingContent = $(".rolling-content");
    const $rollingContainer = $(".rolling-container");
  
    // 콘텐츠 복제
    const contentWidth = $rollingContent.outerWidth();
    $rollingContent.append($rollingContent.html());
  
    // 무한 롤링 애니메이션
    function startRolling() {
      const rollingSpeed = 50; // px 단위로 이동 속도 설정
      const rollingStep = 2; // 한 번에 움직일 거리
  
      function roll() {
        const currentPosition = $rollingContent.position().left;
  
        // 콘텐츠가 완전히 왼쪽으로 이동하면 초기화
        if (Math.abs(currentPosition) >= contentWidth) {
          $rollingContent.css("left", 0);
        }
  
        // 콘텐츠 이동
        $rollingContent.css("left", currentPosition - rollingStep + "px");
      }
  
      setInterval(roll, rollingSpeed);
    }
  })

});
