

function Siderbar() {
    return (
        <>
            <section className="sidebar">
                <div className="imagesiderbar">
                    <img src="src\Icons\Icons\Twitter.svg" alt="twitter" />
                </div>
                <div className="img-icons">
                    <img src="src\Icons\Icons\Home-Fill.svg" alt="home" />
                    <h1>Home</h1>
                </div>
                <div className="img-icons">
                    <img src="src\Icons\Icons\Explore.svg" alt="Explore" />
                    <h1>Explore</h1>
                </div>
                <div className="img-icons">
                    <img src="src\Icons\Icons\Notifications-Fill.svg" alt="" />
                    <h1>
                        Notifications
                    </h1>
                </div>
                <div className="img-icons">
                    <img src="src\Icons\Icons\Messages-Fill.svg" alt="" />
                    <h1>
                        Messages
                    </h1>
                </div>
                <div className="img-icons">
                    <img src="src\Icons\Icons\Bookmarks-Fill.svg" alt="" />
                    <h1>
                        Bookmarks
                    </h1>
                </div>
                <div className="img-icons">
                    <img src="src\Icons\Icons\Lists-Fill.svg" alt="" />
                    <h1>
                        Lists
                    </h1>
                </div>
                <div className="img-icons">
                    <img src="src\Icons\Icons\Profile-Fill.svg" alt="" />
                    <h1>
                        Profile
                    </h1>
                </div>
                <div className="img-icons">
                    <img src="src\Icons\Icons\More.svg" alt="" />
                    <h1>More</h1>
                </div>
                <button className="buttonsidebar">tweet</button>
                <div className="footer-sidebar">
                    <img className="profilsidebar" src="src\images\profile-photo.png" alt="" />
                    <div>
                        <h4>Bradley Ortiz <img src="src\Icons\Icons\Private.svg" alt="" /></h4>
                        <span>@bradley_</span>
                    </div>
                        <img className="more-sidebar" src=" src\Icons\Icons\More-2.svg" alt="" />
                </div>
            </section>
        </>

    );
}

export default Siderbar