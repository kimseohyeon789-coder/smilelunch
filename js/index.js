$(function () {
  // sec04
  $(".sec04_wrap").on("click", function () {
    $(".card").toggleClass("on");
    $(".after").toggleClass("on2");
    $(".before").toggleClass("on3");
  });

  let i = 0;

  // 공통 슬라이드 함수
  function slide() {
    if (i == 2) {
      i = 0;
    } else {
      i++;
    }

    $(".txt li").stop().fadeOut();
    $(".txt li").eq(i).stop().fadeIn();

    $(".progress_bar div").stop().animate({ width: "0" }, 0);
    $(".progress_bar div").eq(i).stop().animate({ width: "3vw" }, 1500);
  }

  // 자동 실행
  // .sec01 해당 페이지로 스크롤했을 때 숫자 증가 시작

  let running = false;

  // 👉 timer를 밖에서 선언
  let timer1, timer2;

  $(window).on("scroll", function () {
    let scrollTop = $(window).scrollTop();
    let winHeight = $(window).height();
    let sec01Top = $(".sec01").offset().top;
    let sec01Bottom = sec01Top + $(".sec01").outerHeight();

    let inView = scrollTop + winHeight > sec01Top && scrollTop < sec01Bottom;

    let $num1 = $(".left .one h3 .num");
    let $num2 = $(".right .five h3 .num");

    if (inView && !running) {
      running = true;

      // 👉 기존 타이머 강제 종료 (중요)
      clearInterval(timer1);
      clearInterval(timer2);

      // 👉 숫자 초기화
      $num1.text(0);
      $num2.text(0);

      let num1 = 0;
      timer1 = setInterval(function () {
        num1++;
        $num1.text(num1);
        if (num1 >= 145) clearInterval(timer1);
      }, 20);

      let num2 = 0;
      timer2 = setInterval(function () {
        num2++;
        $num2.text(num2);
        if (num2 >= 73) clearInterval(timer2);
      }, 20);
    }

    // 👉 영역 벗어나면 리셋 + 타이머 정리
    if (!inView) {
      running = false;

      clearInterval(timer1);
      clearInterval(timer2);
    }
  });

  let timer = setInterval(slide, 2000);

  // visual
  // prev
  $(".prev").click(function () {
    clearInterval(timer);

    i--;
    if (i < 0) i = 2;

    $(".txt li").stop().fadeOut();
    $(".txt li").eq(i).stop().fadeIn();

    $(".progress_bar div").animate({ width: "0" }, 0);
    $(".progress_bar div").eq(i).animate({ width: "3vw" }, 1000);

    timer = setInterval(slide, 2000);
  });

  // visual
  // next
  $(".next").click(function () {
    clearInterval(timer);

    i++;
    if (i > 2) i = 0;

    $(".txt li").stop().fadeOut();
    $(".txt li").eq(i).stop().fadeIn();

    $(".progress_bar div").animate({ width: "0" }, 0);
    $(".progress_bar div").eq(i).animate({ width: "3vw" }, 1000);

    timer = setInterval(slide, 2000);
  });

  // .sec02 파란색 박스 자동 색상 변경
  let r = 0;
  let total = $(".sec02_wrap .textbox").length;

  setInterval(function () {
    $(".sec02_wrap .textbox").removeClass("on4"); // 전체 초기화
    $(".sec02_wrap .textbox").eq(r).addClass("on4"); // 현재만 활성화

    r++;

    if (r >= total) {
      r = 0;
    }
  }, 2000);

  // sec03
  $(window).on("scroll", function () {
    let scroll = $(window).scrollTop();
    // console.log(scroll);
    // base = -200;

    if (scroll >= 2000) {
      $(".sec03").removeClass("ups");
      $(".sec03").eq(0).addClass("ups");
    }
  });

  // sec05
  $(".smallimgs img").on("click", function () {
    let i = $(this).index();

    // 작은 이미지 opacity 처리

    $(".smallimgs img").css({ opacity: "0.5" });
    $(".smallimgs img").eq(i).css({ opacity: "1" });
    $(".smallimgs img").css({ border: "1px solid #333" });
    $(".smallimgs img").eq(i).css({ border: "1px solid #065fff" });

    // 큰 이미지 (li) 전환
    $(".project_wrap ul li").css({ opacity: "0" });
    $(".project_wrap ul li").eq(i).css({ opacity: "1" });

    $(".project_wrap ul li .txtbox").css({ opacity: "0" });
    $(".project_wrap ul li .txtbox").eq(i).css({ opacity: "1" });
  });

  if (w <= 768) {
    // sec03
    $(window).on("scroll", function () {
      let scroll = $(window).scrollTop();
      // console.log(scroll);
      // base = -200;

      if (scroll >= 1000) {
        $(".sec03").removeClass("ups");
        $(".sec03").eq(0).addClass("ups");
      }
    });
  }
});
