const box = [
    {
        duration : "11:49",
        channel_name:"Destiny",
        Subscribers:"25K",
        views : "48K",
        time_period :"15 hours ago",
        link:"https://www.youtube.com/watch?v=YSAhtl7BVtE&ab_channel=Destiny",
        title:"The Universe Is Not Real, Nobel Prize Winners Prove It",
        type :"Universe",
        thumbnail : "icon/universe.jpg",
    },
    {
        duration : "19:00",
        channel_name:"Dhruv Rathe",
        Subscribers:"20M",
        views : "3.8M",
        time_period :"6 Months ago",
        link :"https://www.youtube.com/watch?v=bJj8XEw-zCg",
        title : "How Social Media Destroys Your Life ? ",
        type : "socialmedia",
        thumbnail : "icon/DhruveRathi.jpg"
    },
    {
        duration : "2:56:36",
        channel_name:"Live Insaan",
        Subscribers:"9.68M",
        views : "2.2M",
        time_period :"3 months ago",
        link:"https://www.youtube.com/watch?v=SUzGRZfyEfw&t=14s&ab_channel=LiveInsaan",
        title:"The Best Horror Game of 2022 - Madison (Part 1)",
        type:"Horror",
        thumbnail:"icon/Horror_1.jpg",
    },
    {
        duration : "1:08",
        channel_name:"Aperture",
        Subscribers:"50M",
        views : "1.1M",
        time_period :"2 Years ago",
        link : "https://www.youtube.com/watch?v=OLa8DQkKlyU&ab_channel=Aperture",
        title : "Nanotechnology :A New Frontier",
        type : "Technology",
        thumbnail: "icon/Nanotechnology.jpg",
    },
    
    {
        duration : "4:26:52",
        channel_name:"freeCodeCamp.org",
        Subscribers:"6.74M",
        views : "37M",
        time_period :"4 years ago",
        link:"https://www.youtube.com/watch?v=rfscVS0vtbw&ab_channel=freeCodeCamp.org",
        title:"Learn Python - Full Course for Beginners [Tutorial]",
        type:"Python",
        thumbnail:"icon/Python_4hour.jpg",
    },
    {
        duration : "14:45",
        channel_name:"TEDx Talks",
        Subscribers:"1B",
        views : "3.9M",
        time_period :"5 Years ago",
        link:"https://youtube.com/watch?v=Czg_9C7gw0o",
        title : "Is Social Media Hurting Your Mental Health?",
        type : "socialmedia",
        thumbnail:"icon/TEDxTalks.jpg",
    },
    
    {
        duration : "13:15",
        channel_name:"Alux.com",
        Subscribers:"4.23M",
        views : "552K",
        time_period :"2 years ago",
        link:"https://www.youtube.com/watch?v=7vQznLKEfBs&ab_channel=Alux.com",
        title:"10 Mind Blowing NEW Technologies That Will CHANGE the WORLD",
        type : "Technology",
        thumbnail:"icon/10technology.jpg",
    },
    {
        duration : "29:21",
        channel_name:"melodysheep",
        Subscribers:"2.35M",
        views : "87M",
        time_period :"3 years ago",
        link:"https://www.youtube.com/watch?v=uD4izuDMUQA&ab_channel=melodysheep",
        title:"TIMELAPSE OF THE FUTURE: A Journey to the End of Time (4K)",
        type :"Universe",
        thumbnail : "icon/Timelapse.jpg"
    },
    {
        duration : "10:19",
        channel_name:"List25",
        Subscribers:"2.25M",
        views : "118K",
        time_period :"5 Year ago",
        link:"https://www.youtube.com/watch?v=3zQtfnCdcNw&ab_channel=List25",
        title:"25 ADVANTAGES of SOCIAL MEDIA That Are Good To Keep In Mind",
        type:"socialmedia",
        thumbnail:"icon/Social_media.jpg",
    },
    {
        duration : "12:00:00",
        channel_name:"Bro Code",
        Subscribers:"1K",
        views : "6.6M",
        time_period :"1 year ago",
        link:"https://www.youtube.com/watch?v=XKHEtdqhLK8&t=10s&ab_channel=BroCode",
        title:"Python Tutorial: Full Course for Beginners 🐍 (FREE)",
        type : "Python",
        thumbnail:"icon/Python_Fullcourse.jpg",
    },
    
    {
        duration : "2:37:11",
        channel_name:"Live Insaan",
        Subscribers:"9.68M",
        views : "2.2M",
        time_period :"3 months ago",
        link:"https://www.youtube.com/watch?v=eud9Tv64o4c&ab_channel=LiveInsaan",
        title:"The Best Horror Game of 2022 - Madison (Part 2)",
        type:"Horror",
        thumbnail:"icon/Horror_2.jpg",
    },
    
]

const btns = document.querySelectorAll('.btn');

btns.forEach(function(btn){
    btn.addEventListener("click",(e)=>{
        const data = e.currentTarget.dataset.id;
        console.log(data);
        const select = box.filter((item)=>{
            if(item.type === data){
                return item;
            }
        })
        if(data === "All"){
            todisplay(box);
        }
        else{
            todisplay(select);
        }
    })
})

window.addEventListener('DOMContentLoaded',()=>{
    todisplay(box);
})

function todisplay(items){
    const main = document.querySelector(".main");
    let display = items.map(function(item){
        return ` <div class = "video">
        <div class = "video-thumbnail">
            <a href="${item.link}"><img class ="img-descrition" src="${item.thumbnail}"></a>
            <div class="video-time">
                ${item.duration}
            </div>
        </div>
        <div class = "video-specs">
            <div class = "video-creater">
                <img class = "profile" src = "icon/Creator-2.jpeg">
                <div class="videotip">
                    <div>
                        <img class = "hoverprofile"src ="icon/Creator-2.jpeg">
                    </div>
                    <div>
                        <div class="video-head-hover">
                            ${item.channel_name}
                        </div>
                        <div class="subs">
                            ${item.Subscribers} Subscribers
                        </div>
                    </div>
                </div>
            </div>
            <div class = "video-caption">
                <div class = "video-head">
                   ${item.title}
                </div>
                <div class = "channel-owner">
                ${item.channel_name}
                </div>
                <div class = "video-views">
                 ${item.views} views &#183; ${item.time_period}
                </div>
            </div>
        </div>
    </div>  `
    })
    display = display.join("");
    main.innerHTML = display;
}