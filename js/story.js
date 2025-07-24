const stepData = {
  ヒアリング: {
    title: "ヒアリング",
    description: "お客様との初回接点。ニーズの本質を見抜く。",
    voice: "『デザインさえ良くなればお問い合わせが増えると思っていました…』",
    image: "./img/full_hearing.png",
    sections: [
      {
        class: "story-section story-section--left",
        html: `
          <div class="story-content">
            <div class="story-image" style="background-image: url('./img/story_hearing01.png');"></div>
            <div class="story-text">
              <h3>きっかけは「見た目をよくしたい」</h3>
              <p>最初にいただいた要望は<span>「デザインを刷新したい」</span>でした。しかし会話を重ねるうちに、見えてきたのは<span>"お問い合わせの減少"</span>という本質的な課題。</p>
            </div>
          </div>
        `,
      },
      {
        class: "story-section story-section--left",
        html: `
          <div class="story-content">
            <div class="story-image" style="background-image: url('./img/story_hearing02.png');"></div>
            <div class="story-text">
              <h3>会話から導き出した答え</h3>
              <p>アクセス解析とヒアリングを掛け合わせてユーザーの行動を分析。CTAや導線に迷いがあることが明らかになりました。</p>
            </div>
          </div>
        `,
      },
      {
        class: "story-section story-section--left",
        html: `
          <div class="story-content">
            <div class="story-image" style="background-image: url('./img/story_hearing03.png');"></div>
            <div class="story-text">
              <h3>戦略的なUI設計へ</h3>
              <p>ユーザーの目的と心理に寄り添った情報設計を行い、導線とCTA配置を再設計。目指したのは<span>「迷わせない」</span>導きでした。</p>
            </div>
          </div>
        `,
      },
    ],
  },

  企画: {
    title: "企画",
    description: "戦略を練り、アイデアを提案に昇華。",
    voice: " 『競合との差別化が見えた瞬間、ワクワクしました！』",
    image: "./img/full_planning.png",
    sections: [
      {
        class: "story-section story-section--left",
        html: `
          <div class="story-content">
            <div class="story-image" style="background-image: url('./img/story_planning01.png');"></div>
            <div class="story-text">
              <h3>不明瞭だったブランドの「軸」</h3>
              <p>ヒアリングと競合分析を重ねた結果、現状のブランドイメージがあいまいで、ユーザーに伝わっていないことが判明しました。</p>
            </div>
          </div>
        `,
      },
      {
        class: "story-section story-section--left",
        html: `
          <div class="story-content">
            <div class="story-image" style="background-image: url('./img/story_planning02.png');"></div>
            <div class="story-text">
              <h3>共感を生むコンセプトづくり</h3>
              <p>ターゲットインタビューから得たキーワードを軸に、ブランドの核心を言語化。強みがひと目で伝わるコンセプトを設計しました。</p>
            </div>
          </div>
        `,
      },
      {
        class: "story-section story-section--left",
        html: `
          <div class="story-content">
            <div class="story-image" style="background-image: url('./img/story_planning03.png');"></div>
            <div class="story-text">
              <h3>ワクワクと成果を両立する戦略</h3>
              <p>3つの戦略提案から最適案を選定。KPI設計・UI設計・コンテンツ構成まで一気通貫で提案し、具体的な成果のイメージを共有しました。</p>
            </div>
          </div>
        `,
      },
    ],
  },
  制作: {
    title: "制作",
    description: "想いをかたちに。",
    voice: " 『この細部へのこだわり、本当に嬉しいです！』",
    image: "./img/full_production.png",
    sections: [
      {
        class: "story-section story-section--left",
        html: `
          <div class="story-content">
            <div class="story-image" style="background-image: url('./img/story_production01.png');"></div>
            <div class="story-text">
              <h3>ファーストビューに込めた「一瞬の印象」</h3>
              <p>サイトの第一印象を決めるファーストビュー。デザイン案が複数に分かれ、最終決定までに時間がかかりました。</p>
            </div>
          </div>
        `,
      },
      {
        class: "story-section story-section--left",
        html: `
          <div class="story-content">
            <div class="story-image" style="background-image: url('./img/story_production02.png');"></div>
            <div class="story-text">
              <h3>ユーザーの目線で決める</h3>
              <p>ABテストや仮デザインのヒアリングを繰り返し、最も共感を得られる構成を決定。意思決定をデータに基づいて行いました。</p>
            </div>
          </div>
        `,
      },
      {
        class: "story-section story-section--left",
        html: `
          <div class="story-content">
            <div class="story-image" style="background-image: url('./img/story_production03.png');"></div>
            <div class="story-text">
              <h3>1pxに宿るこだわり</h3>
              <p>各コンテンツブロックの余白・ライン・アニメーションに至るまで、全体の一貫性と見やすさを徹底的に調整しました。</p>
            </div>
          </div>
        `,
      },
    ],
  },
  運用: {
    title: "運用",
    description: "成果につなげる継続的改善。",
    voice: " 『運用開始から売上まで変わるとは…！』",
    image: "./img/full_operation.png",
    sections: [
      {
        class: "story-section story-section--left",
        html: `
          <div class="story-content">
            <div class="story-image" style="background-image: url('./img/story_operation01.png');"></div>
            <div class="story-text">
              <h3>公開後の静かなスタート</h3>
              <p>サイトは完成し公開されたものの、成果には直結せず。その理由を探るべくユーザーの行動を洗い直すことに。</p>
            </div>
          </div>
        `,
      },
      {
        class: "story-section story-section--left",
        html: `
          <div class="story-content">
            <div class="story-image" style="background-image: url('./img/story_operation02.png');"></div>
            <div class="story-text">
              <h3>ヒートマップが教えてくれた真実</h3>
              <p>ヒートマップを使ってユーザーの視線や動きを分析。想定していたクリック導線と実際の動きにズレがありました。</p>
            </div>
          </div>
        `,
      },
      {
        class: "story-section story-section--left",
        html: `
          <div class="story-content">
            <div class="story-image" style="background-image: url('./img/story_operation03.png');"></div>
            <div class="story-text">
              <h3>改善がもたらした成果</h3>
              <p>CTA配置の調整とABテストを実施。CTRは230%改善し、問い合わせ・商談数も大幅に増加。数字で証明された成果でした。</p>
            </div>
          </div>
        `,
      },
    ],
  },
};

//ハンバーガーメニュー
const btn = document.querySelector('.menu__btn');
const overlay = document.querySelector('.menu__overlay');

btn.addEventListener('click', () => {
  btn.classList.toggle('active');
  overlay.classList.toggle('active');
});

const modal = document.getElementById("fullscreenModal");
const image = document.getElementById("fullscreenImage");
const title = document.getElementById("modalTitle");
const desc = document.getElementById("modalDescription");
const voice = document.getElementById("modalVoice");
const content = document.getElementById("modalScrollContent");




document.querySelectorAll(".step-item").forEach((item) => {
  item.addEventListener("click", () => {
    const step = item.dataset.step;
    const data = stepData[step];

    // モーダルに反映
    image.src = data.image;
    title.textContent = data.title;
    desc.textContent = data.description;
    voice.textContent = data.voice;

    content.innerHTML = data.sections
      .map(
        (section) =>
          `<section class="${section.class}">${section.html}</section>`
      )
      .join("");

    modal.classList.remove("hidden");
    modal.classList.add("visible");

    // スクロールアニメ用 Intersection Observer
    setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
            }
          });
        },
        { threshold: 0.1 }
      );

      document.querySelectorAll(".story-section").forEach((section) => {
        observer.observe(section);
      });
    }, 300);
  });
});

// モーダル閉じる
document.getElementById("closeModal").addEventListener("click", () => {
  modal.classList.remove("visible");
  modal.classList.add("hidden");
});
