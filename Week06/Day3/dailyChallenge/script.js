
// Instructions
// In this exercise, you will use object oriented programming concepts to define and use a custom object in JavaScript.

// Create a class named Video. The class should be constructed with the following parameters:
// title (a string)
// uploader (a string, the person who uploaded it)
// time (a number, the duration of the video - in seconds)

class Video{
    constructor(title, uploader, time){
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }

// Create a method called watch() which displays a string as follows:
// “uploader parameter watched all time parameter of title parameter!”

    watch(){
        console.log(`${this.uploader} watched all ${this.time} seconds of ${this.title}!`)
    }
}

// Instantiate a new Video instance and call the watch() method.

let video1 = new Video('myVideo.mp4','Meir', '400');
video1.watch();

// Instantiate a second Video instance with different values.

let video2 = new Video('myMovie.mp4','David', '800');

// Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
// Think of the best data structure to save this information within the array.

const videosData = [
    {
        title : 'video1',
        uploader : 'Yossi',
        time : '100'
    },
    {
        title : 'video2',
        uploader : 'David',
        time : '200'
    },
    {
        title : 'video3',
        uploader : 'Josh',
        time : '300'
    },
    {
        title : 'video4',
        uploader : 'Meir',
        time : '400'
    },
    {
        title : 'video5',
        uploader : 'Rafa',
        time : '500'
    },
]

// Bonus: Loop through the array to instantiate those instances.

let videos = [];
for (let videoData of videosData){
    let video = new Video(videoData.title, videoData.uploader, videoData.time)
    videos.push(video);
}