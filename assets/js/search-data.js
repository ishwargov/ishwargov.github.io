// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "Collections of my projects",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "post-notes-on-rnn-and-lstm-for-reference",
        
          title: "Notes on RNN and LSTM for reference",
        
        description: "Notes on paper - Fundamentals of Recurrent Neural Network (RNN) and Long Short-Term Memory (LSTM) Network",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/notes-on-rnn/";
          
        },
      },{id: "post-inctf-2020-find-me-if-you-can-writeup",
        
          title: 'InCTF 2020 : Find Me If You Can, Writeup <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@ishwar.govind/inctf-2020-find-me-if-you-can-writeup-2120213feba1?source=rss-242c7d1e87db------2", "_blank");
          
        },
      },{id: "news-i-have-joined-arista-networks-as-a-software-engineer",
          title: 'I have joined Arista Networks as a Software Engineer.',
          description: "",
          section: "News",},{id: "news-my-paper-deployability-of-drl-in-portfolio-management-was-published-in-the-acm-8th-international-conference-on-data-science-and-management-of-data",
          title: 'My paper, Deployability of DRL in Portfolio Management, was published in the ACM...',
          description: "",
          section: "News",},{id: "news-i-have-started-my-msc-in-computer-science-at-technical-university-of-munich",
          title: 'I have started my Msc. in Computer Science at Technical University of Munich....',
          description: "",
          section: "News",},{id: "projects-deep-weather-forecast",
          title: 'Deep Weather Forecast',
          description: "time-series forecasting using deep learning models",
          section: "Projects",handler: () => {
              window.location.href = "/projects/DeepWeatherForecast/";
            },},{id: "projects-multi-paragraph-question-answering",
          title: 'Multi-Paragraph Question Answering',
          description: "using Pre-Trained Language Models",
          section: "Projects",handler: () => {
              window.location.href = "/projects/MultiParaQA/";
            },},{id: "projects-plexshare",
          title: 'PlexShare',
          description: "Lab Session Monitor",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Plexshare/";
            },},{id: "projects-portfolio-optimization-using-deep-reinforcement-learning",
          title: 'Portfolio Optimization using Deep Reinforcement Learning',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/PortfolioOptimization/";
            },},{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/ishwargov", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/ishwargovind", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
