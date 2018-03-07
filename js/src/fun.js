(function() {
            var originTitle = document.title,
                titleTime;
            document.addEventListener("visibilitychange", function() {
                if(document.hidden) {
                    document.title = "wish you come back soon";
                    clearTimeout(titleTime);
                } else {
                    document.title = "see you again";
                    titleTime = setTimeout(function() {
                        document.title = originTitle;
                    }, 2000)
                }
            })
        })()