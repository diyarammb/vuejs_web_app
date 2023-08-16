//home blog images
import img_1 from '~/assets/img/blog/1/blog-1.jpg';
import img_2 from '~/assets/img/blog/1/blog-2.jpg';
import img_3 from '~/assets/img/blog/1/blog-3.jpg';
import img_4 from '~/assets/img/blog/1/blog-4.jpg';
// lawyer blog images
import img_lawyer_1 from '~/assets/img/blog/4/blog-1.jpg';
import img_lawyer_2 from '~/assets/img/blog/4/blog-2.jpg';
import img_lawyer_3 from '~/assets/img/blog/4/blog-3.jpg';
import img_lawyer_4 from '~/assets/img/blog/4/blog-4.jpg';
import img_lawyer_5 from '~/assets/img/blog/4/blog-5.jpg';
// user images
import user_1 from '~/assets/img/users/user-1.jpg';
import user_2 from '~/assets/img/users/user-2.jpg';
import user_3 from '~/assets/img/users/user-3.jpg';
import user_4 from '~/assets/img/users/user-4.jpg';
import user_5 from '~/assets/img/users/user-5.jpg';
import user_6 from '~/assets/img/users/user-6.jpg';
import user_7 from '~/assets/img/users/user-7.jpg';
import user_8 from '~/assets/img/users/user-8.jpg';
import user_9 from '~/assets/img/users/user-9.jpg';
import user_10 from '~/assets/img/users/user-10.jpg';
import user_11 from '~/assets/img/users/user-11.jpg';
import user_12 from '~/assets/img/users/user-12.jpg';
import user_13 from '~/assets/img/users/user-13.jpg';
import user_14 from '~/assets/img/users/user-14.jpg';
// freelancer blogs
import freelancer_blog_1 from '~/assets/img/blog/2/blog-1.jpg';
import freelancer_blog_2 from '~/assets/img/blog/2/blog-2.jpg';
import freelancer_blog_3 from '~/assets/img/blog/2/blog-3.jpg';
// agency blogs
import agn_blog_1 from '~/assets/img/blog/5/blog-1.jpg';
import agn_blog_2 from '~/assets/img/blog/5/blog-2.jpg';
// start-up blogs
import start_up_blog_1 from '~/assets/img/blog/7/blog-1.jpg';
import start_up_blog_2 from '~/assets/img/blog/7/blog-2.jpg';
import start_up_blog_3 from '~/assets/img/blog/7/blog-3.jpg';
// creative blogs
import creative_img_1 from '~/assets/img/blog/6/blog-1.jpg';
import creative_img_2 from '~/assets/img/blog/6/blog-2.jpg';
import creative_img_3 from '~/assets/img/blog/6/blog-3.jpg';
// portfolio blogs
import port_img_1 from '~/assets/img/blog/9/blog-1.jpg';
import port_img_2 from '~/assets/img/blog/9/blog-2.jpg';
import port_img_3 from '~/assets/img/blog/9/blog-3.jpg';
// home arch 
import arch_img_1 from '~/assets/img/blog/8/blog-1.jpg';
import arch_img_2 from '~/assets/img/blog/8/blog-2.jpg';
import arch_img_3 from '~/assets/img/blog/8/blog-3.jpg';
import arch_img_4 from '~/assets/img/blog/8/blog-4.jpg';
import arch_img_5 from '~/assets/img/blog/8/blog-5.jpg';
import arch_img_6 from '~/assets/img/blog/8/blog-6.jpg';
// home politician
import polity_blog_1 from '~/assets/img/blog/10/blog-1.jpg';
import polity_blog_2 from '~/assets/img/blog/10/blog-2.jpg';
// blog postbox
import blog_post_img_1 from '~/assets/img/blog/blog-big-1.jpg';
import blog_post_img_2 from '~/assets/img/blog/blog-big-6.jpg';
import blog_post_img_3 from '~/assets/img/blog/blog-big-4.jpg';
import blog_post_img_4 from '~/assets/img/blog/blog-big-5.jpg';
// blog grid images
import grid_img_1 from '~/assets/img/blog/grid/blog-grid-1.jpg';
import grid_img_2 from '~/assets/img/blog/grid/blog-grid-2.jpg';
import grid_img_3 from '~/assets/img/blog/grid/blog-grid-3.jpg';
import grid_img_4 from '~/assets/img/blog/grid/blog-grid-4.jpg';
import grid_img_5 from '~/assets/img/blog/grid/blog-grid-5.jpg';
import grid_img_6 from '~/assets/img/blog/grid/blog-grid-6.jpg';
import grid_img_7 from '~/assets/img/blog/grid/blog-grid-7.jpg';
import grid_img_8 from '~/assets/img/blog/grid/blog-grid-8.jpg';
// masonry images
import masonry_img_1 from '~/assets/img/blog/masonary/blog-masonary-1.jpg';
import masonry_img_2 from '~/assets/img/blog/masonary/blog-masonary-2.jpg';
import masonry_img_3 from '~/assets/img/blog/masonary/blog-masonary-3.jpg';
import masonry_img_4 from '~/assets/img/blog/masonary/blog-masonary-4.jpg';
import masonry_img_5 from '~/assets/img/blog/masonary/blog-masonary-5.jpg';
import masonry_img_6 from '~/assets/img/blog/masonary/blog-masonary-6.jpg';
import masonry_img_7 from '~/assets/img/blog/masonary/blog-masonary-7.jpg';
import masonry_img_8 from '~/assets/img/blog/masonary/blog-masonary-8.jpg';
import masonry_img_9 from '~/assets/img/blog/masonary/blog-masonary-9.jpg';
import masonry_img_10 from '~/assets/img/blog/masonary/blog-masonary-10.jpg';
import masonry_img_11 from '~/assets/img/blog/masonary/blog-masonary-11.jpg';
import masonry_img_12 from '~/assets/img/blog/masonary/blog-masonary-12.jpg';
import masonry_img_13 from '~/assets/img/blog/masonary/blog-masonary-13.jpg';


export default {
  data () {
    return {
      blogData:[
        // home blogs
        {
          id: 1,
          img: img_1,
          tag: 'Work Life',
          title: 'Helping BIPOC employees fight burnout and find community',
          date: 'January 14, 2022',
          read: '4 Min',
          author_img: user_1,
          author_name: 'Penny Tool',
          delay: '.3s',
          home: true,
        },
        {
          id: 2,
          img: img_2,
          tag: 'Consulting',
          title: 'How To Build Trust, Increase Authority, And Rank High With Google',
          date: 'January 16, 2022',
          read: '7 Min',
          author_img: user_2,
          author_name: 'Naim',
          delay: '.5s',
          home: true,
        },
        {
          id: 3,
          img: img_3,
          tag: 'Harry Design',
          title: 'The Key To A Successful Non-Profit Marketing Campaign',
          date: 'January 18, 2022',
          read: '10 Min',
          author_img: user_3,
          author_name: 'Mamun',
          delay: '.7s',
          home: true,
        },
        {
          id: 4,
          img: img_4,
          tag: 'Events',
          title: 'I stopped checking social media before noon, Here’s how it improved.',
          date: 'January 20, 2022',
          read: '12 Min',
          author_img: user_4,
          author_name: 'Fahim',
          delay: '.9s',
          home: true,
        },
        // lawyer blogs 
        {
          id: 5,
          img: img_lawyer_1,
          tag: 'Immigration',
          title: 'Social Media Postings Lead to Defense.',
          sm_text: 'Quis autem iure qui voluptate velit ess quam molestiae was.',
          author_img: user_1,
          author_name: 'Penny Tool',
          date: 'April 10, 2022',
          comment: 3,
          home_lawyer: true,
        },
        {
          id: 6,
          img: img_lawyer_2,
          tag: 'Criminal Law',
          title: 'This is war, and in war the only crime is to lose.',
          sm_text: 'Quis autem iure qui voluptate velit ess quam molestiae was.',
          author_img: user_2,
          author_name: 'Jackson Pot',
          date: 'March 12, 2022',
          comment: 5,
          home_lawyer: true,
        },
        {
          id: 7,
          img: img_lawyer_3,
          tag: 'Finance Law',
          title: 'How to Manage Business’s Online Reputation',
          sm_text: 'Quis autem iure qui voluptate velit ess quam molestiae was.',
          author_img: user_3,
          author_name: 'Tensin',
          date: 'January 15, 2022',
          comment: 7,
          home_lawyer: true,
        },
        {
          id: 8,
          img: img_lawyer_4,
          tag: 'Finance Law',
          title: 'Can anyone report a case againest a boy',
          sm_text: 'Quis autem iure qui voluptate velit ess quam molestiae was.',
          author_img: user_4,
          author_name: 'Steaven',
          date: 'May 08, 2022',
          comment: 10,
          home_lawyer: true,
        },
        {
          id: 9,
          img: img_lawyer_5,
          tag: 'Finance Law',
          title: 'In 1922 there is a pledge of fundamental',
          sm_text: 'Quis autem iure qui voluptate velit ess quam molestiae was.',
          author_img: user_5,
          author_name: 'Weir Doe',
          date: 'Jun 05, 2022',
          comment: 10,
          home_lawyer: true,
        },
      
        // home freelancer blogs
        {
          id: 10,
          img: freelancer_blog_1,
          tag: 'Marketing',
          title: 'Curating a workplace that inspires all of us',
          sm_text: 'Amet minim mollit non deserunt est sit aliqua dolor do amet.',
          author_img: user_1,
          author_name: 'Naim',
          date: '26 Mar 2022',
          delay: '.3s',
          home_freelancer: true,
        },
        {
          id: 11,
          img: freelancer_blog_2,
          tag: 'Design',
          title: 'How to deliver clients a design system without any problem',
          sm_text: 'Amet minim mollit non deserunt est sit aliqua dolor do amet.',
          author_img: user_2,
          author_name: 'Naim',
          date: '15 Apr 2022',
          delay: '.5s',
          home_freelancer: true,
        },
        {
          id: 12,
          img: freelancer_blog_3,
          tag: 'Animation',
          title: 'World’s most famous app developers and designers',
          sm_text: 'Amet minim mollit non deserunt est sit aliqua dolor do amet.',
          author_img: user_3,
          author_name: 'Fahim',
          date: '18 Feb 2022',
          delay: '.7s',
          home_freelancer: true,
        },
        // agency blogs
        {
          id: 13,
          img: agn_blog_1,
          tag: 'Startup',
          title: "Free advertising <br /> your online business.",
          sm_text: 'Content king that means bringing and strategic approach',
          author_img: user_1,
          comment: 4,
          author_name: 'Naim',
          date: '26 July, 2022',
          delay: '.3s',
          home_agency: true,
        },
        {
          id: 14,
          img: agn_blog_2,
          tag: 'Business',
          title: "Investment <br /> monitor top 2022",
          sm_text: 'Content king that means bringing and strategic approach',
          author_img: user_2,
          comment: 2,
          author_name: 'Smith',
          date: '12 March, 2022',
          delay: '.5s',
          home_agency: true,
        },
        // home start-up
        {
          id: 15,
          img: start_up_blog_1,
          tag: 'Resources',
          title: '10 Quick tips about blogging',
          sm_text: 'Optio odit nam aut recusandae consequatur  Accusantium voluptatem.',
          author_img: user_6,
          comment: 45,
          see: '234,5k',
          author_name: 'Angela',
          date: 'October 24, 2022',
          home_start_up: true,
        },
        {
          id: 16,
          img: start_up_blog_2,
          tag: 'Startups',
          title: 'Reed’s UK salary guides 2022',
          sm_text: 'Optio odit nam aut recusandae consequatur  Accusantium voluptatem.',
          author_img: user_5,
          comment: 40,
          see: '155,5k',
          author_name: 'Wildner',
          date: 'November 10, 2022',
          home_start_up: true,
        },
        {
          id: 17,
          img: start_up_blog_3,
          tag: 'Business',
          title: 'Ideahub X is great for Startups',
          sm_text: 'Optio odit nam aut recusandae consequatur  Accusantium voluptatem.',
          author_img: user_7,
          comment: 35,
          see: '140,5k',
          author_name: 'James Roy',
          date: 'March 08, 2022',
          home_start_up: true,
        },
        // home creative
        {
          id: 18,
          img: creative_img_1,
          icon:`<svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M18.3307 9.99984C18.3307 5.39984 14.5974 1.6665 9.9974 1.6665C5.3974 1.6665 1.66406 5.39984 1.66406 9.99984C1.66406 14.5998 5.3974 18.3332 9.9974 18.3332"
                  stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M6.66667 2.5H7.5C5.875 7.36667 5.875 12.6333 7.5 17.5H6.66667" stroke="currentColor"
                  stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12.4961 2.5C13.3044 4.93333 13.7128 7.46667 13.7128 10" stroke="currentColor"
                  stroke-linecap="round" stroke-linejoin="round" />
                <path d="M2.49609 13.3333V12.5C4.92943 13.3083 7.46276 13.7167 9.99609 13.7167"
                  stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M2.49609 7.5C7.36276 5.875 12.6294 5.875 17.4961 7.5" stroke="currentColor"
                  stroke-linecap="round" stroke-linejoin="round" />
                <path
                  d="M15.1667 17.8334C16.6394 17.8334 17.8333 16.6394 17.8333 15.1667C17.8333 13.6939 16.6394 12.5 15.1667 12.5C13.6939 12.5 12.5 13.6939 12.5 15.1667C12.5 16.6394 13.6939 17.8334 15.1667 17.8334Z"
                  stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M18.3333 18.3333L17.5 17.5" stroke="currentColor" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>`,
          tag: 'Resources',
          title: "Design <br /> Qualitative",
          sm_text: 'Lorem ipsum dolor sit amet, consectetur are adipiscing elit. Donec nec elementum ipsum porttitor convallis.',
          author_img: user_1,
          author_name: 'Admin',
          date: 'January 10, 2022',
          delay: '.3s',
          video_id: 'z4dQmpf5PLM',
          home_creative: true,
        },
        {
          id: 19,
          img: creative_img_2,
          icon:`<svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M17.8919 15.8337V4.16699C17.8919 2.50033 17.0586 1.66699 15.3919 1.66699H12.0586C10.3919 1.66699 9.55859 2.50033 9.55859 4.16699V15.8337C9.55859 17.5003 10.3919 18.3337 12.0586 18.3337H15.3919C17.0586 18.3337 17.8919 17.5003 17.8919 15.8337Z"
                  stroke="currentColor" stroke-linecap="round" />
                <path d="M9.55859 5H13.7253" stroke="currentColor" stroke-linecap="round" />
                <path d="M9.55859 15H12.8919" stroke="currentColor" stroke-linecap="round" />
                <path d="M9.55859 11.625L13.7253 11.6667" stroke="currentColor" stroke-linecap="round" />
                <path d="M9.55859 8.33301H12.0586" stroke="currentColor" stroke-linecap="round" />
                <path
                  d="M4.57604 1.66699C3.21771 1.66699 2.10938 2.77533 2.10938 4.12533V14.9253C2.10938 15.3003 2.26771 15.867 2.45938 16.192L3.14271 17.3253C3.92604 18.6337 5.21771 18.6337 6.00104 17.3253L6.68438 16.192C6.87604 15.867 7.03437 15.3003 7.03437 14.9253V4.12533C7.03437 2.77533 5.92604 1.66699 4.57604 1.66699Z"
                  stroke="currentColor" stroke-linecap="round" />
                <path d="M7.03437 5.83301H2.10938" stroke="currentColor" stroke-linecap="round" />
              </svg>`,
          tag: 'UX Design',
          title: "Become web <br /> designer",
          sm_text: 'Lorem ipsum dolor sit amet, consectetur are adipiscing elit. Donec nec elementum ipsum porttitor convallis.',
          author_img: user_2,
          author_name: 'Naim',
          date: 'April 12, 2022',
          delay: '.5s',
          video_id: 'szKlc6zD2uI',
          home_creative: true,
        },
        {
          id: 20,
          img: creative_img_3,
          icon: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M7.5013 18.3337H12.5013C16.668 18.3337 18.3346 16.667 18.3346 12.5003V7.50033C18.3346 3.33366 16.668 1.66699 12.5013 1.66699H7.5013C3.33464 1.66699 1.66797 3.33366 1.66797 7.50033V12.5003C1.66797 16.667 3.33464 18.3337 7.5013 18.3337Z"
                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M7.58594 10.0002V8.7669C7.58594 7.17524 8.71094 6.53357 10.0859 7.32524L11.1526 7.9419L12.2193 8.55857C13.5943 9.35024 13.5943 10.6502 12.2193 11.4419L11.1526 12.0586L10.0859 12.6752C8.71094 13.4669 7.58594 12.8169 7.58594 11.2336V10.0002Z"
                    stroke="currentColor" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                </svg>`,
          tag: 'Tutorial',
          title: "Start run a <br /> website",
          sm_text: 'Lorem ipsum dolor sit amet, consectetur are adipiscing elit. Donec nec elementum ipsum porttitor convallis.',
          author_img: user_3,
          author_name: 'Stiven',
          date: 'May 25, 2022',
          delay: '.7s',
          video_id: 'w3pmNX74wf4',
          home_creative: true,
        },
        // portfolio blogs
        {
          id: 21,
          img: port_img_1,
          tag: 'Design',
          title: 'Logo design trends to avoid in 2022.',
          date: '24 October 2022',
          delay: '.3s',
          home_portfolio: true,
        },
        {
          id: 22,
          img: port_img_2,
          tag: 'Branding',
          title: "6 free website <br /> mockup tools 2022.",
          date: '10 April 2022',
          delay: '.5s',
          home_portfolio: true,
        },
        {
          id: 23,
          img: port_img_3,
          tag: 'Technology',
          title: "How to build support <br /> with your design clients.",
          date: '26 June 2022',
          delay: '.7s',
          home_portfolio: true,
        },
        // home architecture
        {
          id: 24,
          img: arch_img_1,
          tag: 'Featured Post',
          category: 'Inspiration',
          title: "Collective living challenge in <br /> Modern design.",
          date: 'April 24, 2022',
          home_architecture: true,
        },
        {
          id: 25,
          img: arch_img_2,
          tag: 'Architecture',
          category: 'Architecture',
          title: "Six inspiring new york <br /> young architects following.",
          date: 'May 01, 2022',
          home_architecture: true,
        },
        {
          id: 26,
          img: arch_img_3,
          tag: 'Architecture',
          category: 'Architecture',
          title: "Six inspiring new york <br /> young architects following.",
          date: 'May 15, 2022',
          home_architecture: true,
        },
        {
          id: 27,
          img: arch_img_4,
          tag: 'Featured Post',
          category: 'Inspiration',
          title: "Collective living challenge in <br /> Modern design.",
          date: 'June 25, 2022',
          home_architecture: true,
        },
        {
          id: 28,
          img: arch_img_5,
          tag: 'Featured Post',
          category: 'Inspiration',
          title: "Collective living challenge in <br /> Modern design.",
          date: 'June 20, 2022',
          home_architecture: true,
        },
        {
          id: 29,
          img: arch_img_6,
          tag: 'Architecture',
          category: 'Architecture',
          title: "Six inspiring new york young architects following.",
          date: 'July 01, 2022',
          home_architecture: true,
        },
        // home politician
        {
          id: 30,
          img: polity_blog_1,
          tag: 'News',
          title: 'Many important brands have given us',
          sm_desc: 'Lorem ipsum dolor consectetur adipiscing elit.',
          author_img: user_1,
          author_name: 'Angela',
          date: 'April 17, 2022',
          comments: 4,
          p_blog_1: true,
          home_politician: true,
        },
        {
          id: 31,
          img: polity_blog_2,
          tag: 'News',
          title: 'Many important brands have given us',
          sm_desc: 'Lorem ipsum dolor consectetur adipiscing elit.',
          author_img: user_8,
          author_name: 'Angela',
          date: 'April 18, 2022',
          comments: 6,
          p_blog_big: true,
          home_politician: true,
        },
        {
          home_politician: true,
          sm_blogs: [
            {
              id: 32,
              tag: 'News',
              title: 'Keep quiet and continue working hard',
              author_img: user_7,
              author_name: 'Thomas',
              date: 'March 20, 2022',
              comments: 5,
            },
            {
              id: 33,
              tag: 'News',
              title: 'Tuesday tips: being realistic with your goals',
              author_img: user_4,
              author_name: 'Posture',
              date: 'March 22, 2022',
              comments: 7,
            },
            {
              id: 34,
              tag: 'News',
              title: 'Who is running for california governor in..!',
              author_img: user_5,
              author_name: 'Morose',
              date: 'March 25, 2022',
              comments: 9,
            },
          ]
        },
        // blog postbox 
        {
          id:35,
          img:blog_post_img_1,
          author_name:'Naim',
          date:'January 22, 2022',
          comments:'35',
          title:'How to Clean Your Home Faster and More Efficiently',
          desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat',
          blog_post_box:true,
        },
        {
          id:36,
          img:blog_post_img_3,
          author_name:'Shahnewaz',
          date:'February 15, 2022',
          comments:'40',
          title:'Four Ways a Clean Workplace Employees Happy and Healthy',
          desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat',
          video:true,
          video_id:'-WRZI63emjs',
          blog_post_box:true,
        },
        {
          id:37,
          author_name:'Salim Rana',
          date:'March 10, 2022',
          comments:'42',
          title:'Social distancing',
          desc:'Never ever think of giving up. Winners never quit and quitters never win. Take all negative words out your mental dictionary and focus on the',
          blog_quote:true,
          blog_post_box:true,
        },
        {
          id:38,
          audio_url:'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/316547873&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
          author_name:'Naim Ahmed',
          date:'July 10, 2022',
          comments:'30',
          title:'Time for Spring Cleaning? Use These Tips From the Professionals',
          desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat',
          blog_audio:true,
          blog_post_box:true,
        },
        {
          id:39,
          slider_images:[blog_post_img_2,blog_post_img_1,blog_post_img_4],
          author_name:'Mamun Ahmed',
          date:'April 10, 2022',
          comments:'25',
          title:'Visiting the Ads of the World blog is like visiting museum',
          desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat',
          blog_slider:true,
          blog_post_box:true,
        },
        // blog grid items
        {
          id:40,
          tag:'Work Life',
          img:grid_img_1,
          date:'January 21, 2022',
          title:'How to Create an Effective Design Portfolio',
          sm_desc:'Lorem ipsum is simply dummy text ipsum been dummy',
          author_name:'Jason',
          author_img:user_9,
          comments:35,
          watch:'234,5k',
          blog_grid:true,
        },
        {
          id:41,
          tag:'Music',
          img:grid_img_2,
          date:'January 23, 2022',
          title:'Look at usual things with unusual eyes',
          sm_desc:'Lorem ipsum is simply dummy text ipsum been dummy',
          author_name:'Naim',
          author_img:user_10,
          comments:38,
          watch:'250,7k',
          blog_grid:true,
        },
        {
          id:42,
          tag:'Business',
          img:grid_img_3,
          date:'January 25, 2022',
          title:'An economist’s guess is liable good as anybody',
          sm_desc:'Lorem ipsum is simply dummy text ipsum been dummy',
          author_name:'Cliphon',
          author_img:user_11,
          comments:42,
          watch:'240,7k',
          blog_grid:true,
        },
        {
          id:43,
          tag:'Editorial',
          img:grid_img_4,
          date:'January 27, 2022',
          title:'How Can Designers Prepare For The Future?',
          sm_desc:'Lorem ipsum is simply dummy text ipsum been dummy',
          author_name:'Stevne',
          author_img:user_12,
          comments:25,
          watch:'122,7k',
          blog_grid:true,
        },
        {
          id:44,
          date:'January 28, 2022',
          title:'Social distancing',
          sm_desc:"Never ever think of <br/> giving up. Winners never quit and quitters never win. Take all negative words out your mental dictionary and focus on the",
          author_name:'Shahnewaz Sakil',
          author_img:user_12,
          comments:25,
          watch:'122,7k',
          blog_quote:true,
          blog_grid:true,
        },
        {
          id:45,
          tag:'Creative Web',
          img:grid_img_5,
          date:'February 05, 2022',
          title:'Lorem ipsum dolor sit amet enim 2',
          sm_desc:'Lorem ipsum is simply dummy text ipsum been dummy',
          author_name:'Crish',
          author_img:user_13,
          comments:22,
          watch:'100,7k',
          blog_grid:true,
        },
        {
          id:46,
          tag:'Architecture',
          img:grid_img_6,
          date:'February 08, 2022',
          title:'Never give in except convictions good sense',
          sm_desc:'Lorem ipsum is simply dummy text ipsum been dummy',
          author_name:'Sara',
          author_img:user_6,
          comments:48,
          watch:'190,7k',
          blog_grid:true,
        },
        {
          id:47,
          tag:'Desing',
          img:grid_img_7,
          date:'February 10, 2022',
          title:'Investment trend monitor: Top trends in 2021',
          sm_desc:'Lorem ipsum is simply dummy text ipsum been dummy',
          author_name:'Lilly',
          author_img:user_7,
          comments:54,
          watch:'266,7k',
          blog_grid:true,
        },
        {
          id:48,
          tag:'Travel',
          img:grid_img_8,
          date:'February 15, 2022',
          title:'Create a Landing Page That Performs Great',
          sm_desc:'Lorem ipsum is simply dummy text ipsum been dummy',
          author_name:'Kasam',
          author_img:user_8,
          comments:62,
          watch:'302,2k',
          blog_grid:true,
        },
        // masonry items
        {
          id:49,
          tag:'Work Life',
          img:masonry_img_1,
          date:'January 21, 2022',
          title:'How to Create an Effective Design Portfolio',
          sm_desc:'Lorem ipsum is simply dummy text ipsum been dummy',
          author_name:'Jason',
          author_img:user_9,
          comments:35,
          watch:'234,5k',
          blog_masonry:true,
        },
        {
          id:50,
          tag:'Architecture',
          img:masonry_img_2,
          date:'February 08, 2022',
          title:'Never give in except convictions good sense',
          sm_desc:'Lorem ipsum is simply dummy text ipsum been dummy',
          author_name:'Sara',
          author_img:user_6,
          comments:48,
          watch:'190,7k',
          blog_masonry:true,
        },
        {
          id:51,
          tag:'Business',
          img:masonry_img_3,
          date:'January 25, 2022',
          title:'Business meeting 2021 in San Francisco',
          sm_desc:'Lorem ipsum is simply dummy text ipsum been dummy',
          author_name:'Cliphon',
          author_img:user_11,
          comments:42,
          watch:'240,7k',
          blog_masonry:true,
        },
        {
          id:52,
          tag:'Design',
          img:masonry_img_4,
          date:'January 30, 2022',
          title:'Lorem ipsum dolor sit amet enim 2',
          sm_desc:'Lorem ipsum is simply dummy text ipsum been dummy',
          author_name:'Smith',
          author_img:user_10,
          comments:55,
          watch:'235,2k',
          blog_masonry:true,
        },
        {
          id:53,
          tag:'Work Life',
          img:masonry_img_5,
          date:'March 20, 2022',
          title:'How to Create Effective Design Portfolio',
          sm_desc:'Lorem ipsum is simply dummy text ipsum been dummy',
          author_name:'Fahim',
          author_img:user_5,
          comments:59,
          watch:'135,2k',
          blog_masonry:true,
        },
        {
          id:54,
          tag:'Editorial',
          img:masonry_img_6,
          date:'January 27, 2022',
          title:'How Can Designers Prepare For The Future?',
          sm_desc:'Lorem ipsum is simply dummy text ipsum been dummy',
          author_name:'Stevne',
          author_img:user_12,
          comments:25,
          watch:'122,7k',
          blog_masonry:true,
        },
        {
          id:55,
          tag:'Travel',
          img:grid_img_7,
          date:'February 15, 2022',
          title:'Create a Landing Page That Performs Great',
          sm_desc:'Lorem ipsum is simply dummy text ipsum been dummy',
          author_name:'Kasam',
          author_img:user_8,
          comments:62,
          watch:'302,2k',
          blog_masonry:true,
        },
        {
          id:56,
          tag:'Creative Web',
          img:masonry_img_8,
          date:'February 05, 2022',
          title:'The new trend of Marketing Snapchat.',
          sm_desc:'Lorem ipsum is simply dummy text ipsum been dummy',
          author_name:'Crish',
          author_img:user_13,
          comments:22,
          watch:'100,7k',
          blog_masonry:true,
        },
        {
          id:57,
          tag:'Editorial',
          date:'February 18, 2022',
          title:'How to Create Effective Design Portfolio',
          sm_desc:'Lorem ipsum is simply dummy text ipsum been dummy',
          author_name:'Sara',
          author_img:user_14,
          comments:28,
          watch:'120,5k',
          blog_masonry:true,
        },
        {
          id:58,
          tag:'Music',
          img:masonry_img_9,
          date:'April 10, 2022',
          title:'How to Create Effective Design Portfolio',
          sm_desc:'Lorem ipsum is simply dummy text ipsum been dummy',
          author_name:'Salim',
          author_img:user_7,
          comments:22,
          watch:'105,9k',
          blog_masonry:true,
        },
        {
          id:59,
          tag:'Music',
          img:masonry_img_10,
          date:'January 23, 2022',
          title:'Look at usual things with unusual eyes',
          sm_desc:'Lorem ipsum is simply dummy text ipsum been dummy',
          author_name:'Naim',
          author_img:user_10,
          comments:38,
          watch:'250,7k',
          blog_masonry:true,
        },
        {
          id:60,
          date:'January 28, 2022',
          title:'Social distancing',
          sm_desc:"Never ever think of <br/> giving up. Winners never quit and quitters never win. Take all negative words out your mental dictionary and focus on the",
          author_name:'Shahnewaz Sakil',
          author_img:user_12,
          comments:25,
          watch:'122,7k',
          blog_quote:true,
          blog_masonry:true,
        },
        {
          id:61,
          tag:'Design',
          img:masonry_img_11,
          date:'May 23, 2022',
          title:'Investment trend monitor: Top trends in 2021',
          sm_desc:'Lorem ipsum is simply dummy text ipsum been dummy',
          author_name:'Weir Doe',
          author_img:user_2,
          comments:42,
          watch:'264,4k',
          blog_masonry:true,
        },
        {
          id:62,
          tag:'Design',
          img:masonry_img_12,
          date:'May 11, 2022',
          title:'Investment trend monitor: Top trends in 2021',
          sm_desc:'Lorem ipsum is simply dummy text ipsum been dummy',
          author_name:'Hamim',
          author_img:user_5,
          comments:49,
          watch:'189,4k',
          blog_masonry:true,
        },
        {
          id:63,
          tag:'Desing',
          img:masonry_img_13,
          date:'February 10, 2022',
          title:'Investment trend monitor: Top trends in 2021',
          sm_desc:'Lorem ipsum is simply dummy text ipsum been dummy',
          author_name:'Lilly',
          author_img:user_7,
          comments:54,
          watch:'266,7k',
          blog_masonry:true,
        },
      ]
    }
  }
}