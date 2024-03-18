# Short Video Automation

Automate the creation of short videos with text-to-speech, audio merging, image overlay, and background audio.
- It takes average 40 second to create a 35 second short video.


# Example videos
Here are some example videos created using Short Video Automation:

1. A fact video about earth.

https://github.com/rhmt80/shortvideo-automation/blob/main/demo-video.mp4


## Overview

Short Video Automation is a tool that simplifies the process of creating short videos. It combines various multimedia elements to produce engaging videos quickly. The key features of this tool include:

1. **AI-Generated Scripts**: Generate scripts with the help of artificial intelligence (AI). These scripts will form the basis of your short videos.

2. **Text-to-Speech**: Convert the generated scripts into audio using text-to-speech technology.

3. **Audio Merging**: Combine the generated audio with a sample video using FFmpeg to create the audio track for your short video.

4. **Image Overlay**: For specific keywords in the script, automatically download images and overlay them on the video.

5. **Background Audio**: Add a background audio track to enhance the video's appeal.

## Usage

### Prerequisites

- Node.js and npm installed
- FFmpeg installed

### Installation

Clone the repository:

```bash
$ git clone https://github.com/rhmt80/shortvideo-automation.git
$ cd short-video-automation
```

Download and paste a base video which you want to use in project root dir
[You can test with this video: https://drive.google.com/file/d/19NqkcgTXKAmiWBguCiZUAhRGbEZEQbuW/view?usp=sharing

Then find any interesting quora question and answer and paste its link in tool

Run the tool
```
npm run start
```
