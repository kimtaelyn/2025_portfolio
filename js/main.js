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

    ScrollTrigger.scrollerProxy("body", {
        scrollTop(value) {
            if (arguments.length) {
                container.scrollTop = value;
            }
            return container.scrollTop;
        }
    });

    container.addListener((e) => {
        let scrollTop = container.scrollTop;
        console.log("현재 스크롤 위치:", scrollTop);

        $('.box1').css('transform', `translateY(${scrollTop * 0.7}px)`);

        document.querySelectorAll("#section02 .card").forEach(card => {
            let cardTop = card.getBoundingClientRect().top + scrollTop;
            let triggerPoint = window.innerHeight * 0.9;
            if (cardTop < scrollTop + triggerPoint) {
                card.classList.add("visible");
            }
        });

        let section03Elements = [
            { selector: '.s3_mockup', trigger: 3600 },
            { selector: '.s3_line1', trigger: 3300 },
            { selector: '.s3_line2', trigger: 3400 },
            { selector: '.s3_over', trigger: 3500 },
            { selector: '.s3_view', trigger: 3550 },
            { selector: '.s3_img1', trigger: 3500 },
            { selector: '.s3_img2', trigger: 3580 },
            { selector: '.s3_img3', trigger: 3700 },
            { selector: '.s3_text1', trigger: 4000 },
            { selector: '.s3_k', trigger: 4200 },
            { selector: '.s3_profileimg2', trigger: 4800 },  
            { selector: '.s3_text3', trigger: 5400 },
            { selector: '.s3_text4', trigger: 5700 },
            { selector: '.s3_star', trigger: 5800 },
            { selector: '.s3_img6', trigger: 6200 },
            { selector: '.s3_t', trigger: 6300 },
            { selector: '.s3_img5', trigger: 7010 },
            { selector: '.s3_line2', trigger: 6700 },
            { selector: '.s3_line3', trigger: 8500 },
            { selector: '.s3_l', trigger: 7800 },
            { selector: '.s3_img8', trigger: 8100 },
            { selector: '.s3_img9', trigger: 8200 },
            { selector: '.s3_t1', trigger: 8000 },
            { selector: '.s3_h', trigger: 6060 },
            { selector: '.s3_a', trigger: 6080 },
            { selector: '.s3_n', trigger: 6100 },
            { selector: '.s3_k2', trigger: 6120 },
            { selector: '.s3_y', trigger: 6140 },
            { selector: '.s3_o', trigger: 6160 },
            { selector: '.s3_u', trigger: 6230 },
        ];

        section03Elements.forEach(item => {
            if (scrollTop >= item.trigger) {
                $(item.selector).addClass('on');
            }
        });

        let section04Elements = [
            { selector: '.s4_bg', trigger: 6250 },
            { selector: '.s4_img1', trigger: 9500 },
            { selector: '.s4_img2', trigger: 9600 },
            { selector: '.s4_img3', trigger: 9700 },
            { selector: '.s4_img4', trigger: 9800 },
            { selector: '.s4_img5', trigger: 9850 },
        ];

        section04Elements.forEach(item => {
            if (scrollTop >= item.trigger) {
                $(item.selector).addClass('on');
            }
        });
    });

    (function () {
        $('.main_title2').addClass('on');
        $('.sub_title').addClass('on');

        // 🎯 ✅ s4_img5 클릭 시 section03으로 이동 ✅
        document.querySelector(".s4_img5").addEventListener("click", function (e) {
            e.preventDefault(); // 기본 이동 방지
            let section03 = document.querySelector("#section03");
            let scrollToY = section03.offsetTop;
            container.scrollTo(0, scrollToY, 1000); // (x좌표, y좌표, 애니메이션 시간 ms)
        });

        // 🎯 ✅ s1_profile 클릭 시 section03으로 이동 ✅
        document.querySelector(".s1_profile a").addEventListener("click", function (e) {
            e.preventDefault(); // 기본 이동 방지
            let section03 = document.querySelector("#section03");
            let scrollToY = section03.offsetTop;
            container.scrollTo(0, scrollToY, 1000);
        });

        // ✅ GSAP 스크롤 애니메이션
        gsap.to(".box2", {
            x: 400,
            scrollTrigger: {
                trigger: ".box2",
                start: "top center",
                end: "top 100px",
                scrub: 1,
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
            }
        });

    })();
});