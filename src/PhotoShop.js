import React from "react";

const PhotoShop = () => {
    return (
        <div>

            <div className="header">
                <nav>
                    <ul>
                        <li>
                            <a href="">photobooth!</a>
                        </li>
                        <li>
                            <a href="">album!</a>
                        </li>
                    </ul>
                </nav>
            </div>

            <main>
                <div className="cover">
                    <div className="photoEditor">
                        <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" alt="" />
                        <div className="photoUtils">
                            <button>+ upload picture</button>
                            <button>save to album!</button>
                        </div>
                    </div>
                    <div className="filterSpace">
                        <p className="largeFont">time machine</p>
                        <p id="slogan">travel back in time!</p>
                        <div className="filterOptions">
                            <button class="filters">1800s (b&w)</button>
                            <button class="filters">1950s (sepia)</button>
                            <button class="filters">1980s (XXX)</button>
                            <button class="filters">2000s (XXX)</button>
                        </div>
                    </div>
                    
                    {/* <img className="smallImg" src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-james-wheeler-417074.jpg&fm=jpg" alt="" /> */}
                    {/* <img className="smallImg" src="https://i.pinimg.com/originals/43/db/46/43db4682a57bbddf864719d9403919eb.jpg" alt="" /> */}
                    {/* <img src="https://images.unsplash.com/photo-1607992922515-7e38329e65d4?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlJTIwaW1hZ2VzfGVufDB8fDB8fHww" alt="" /> */}
                    {/* <img src="https://images.unsplash.com/photo-1607992922515-7e38329e65d4?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlJTIwaW1hZ2VzfGVufDB8fDB8fHww" alt="" /> */}
                </div>

            </main>

        </div>
    )
}

export default PhotoShop;