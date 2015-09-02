function _(id) {
        return document.getElementById(id);
    }

    function audioApp() {
        var audio = new Audio();
        var audio_folder = "http://7xk72e.com1.z0.glb.clouddn.com/";
        var audio_ext = ".mp3";
        var audio_index = 1;
        var is_playing = false;
        var playingtrack;
        var trackbox = _("trackbox");
        var tracks = {
            "track1": ["LostFrequencies", "LostFrequencies"],
            "track2": ["Martin", "Martin"],
            "track3": ["Royksopp", "Royksopp"],
            "track4": ["El-Taxi", "El-Taxi"],
            "track5": ["my-woman-my", "my-woman-my"],
            "track6": ["Sugar-RobinSchulz", "Sugar-RobinSchulz"]
        };
        for (var track in tracks) {
            var tb = document.createElement("div");
            var pb = document.createElement("button");
            var tn = document.createElement("div");
            tb.className = "trackbar";
            pb.className = "playbutton";
            tn.className = "trackname";
            tn.innerHTML = audio_index + ". " + tracks[track][0];
            pb.id = tracks[track][1];
            pb.addEventListener("click", switchTrack);
            tb.appendChild(pb);
            tb.appendChild(tn);
            trackbox.appendChild(tb);
            audio_index++;
        }
        audio.addEventListener("ended", function() {
            _(playingtrack).style.background = "url(http://7xk72e.com1.z0.glb.clouddn.com/music2.png)";
            playingtrack = "";
            is_playing = false;
        });

        function switchTrack(event) {
            if (is_playing) {
                if (playingtrack != event.target.id) {
                    is_playing = true;
                    _(playingtrack).style.background = "url(http://7xk72e.com1.z0.glb.clouddn.com/music2.png)";
                    event.target.style.background = "url(http://7xk72e.com1.z0.glb.clouddn.com/music1.gif)";
                    audio.src = audio_folder + event.target.id + audio_ext;
                    audio.play();
                } else {
                    audio.pause();
                    is_playing = false;
                    event.target.style.background = "url(http://7xk72e.com1.z0.glb.clouddn.com/music2.png)";
                }
            } else {
                is_playing = true;
                event.target.style.background = "url(http://7xk72e.com1.z0.glb.clouddn.com/music1.gif)";
                if (playingtrack != event.target.id) {
                    audio.src = audio_folder + event.target.id + audio_ext;
                }
                audio.play();
            }
            playingtrack = event.target.id;
        }
    }
    window.addEventListener("load", audioApp);
