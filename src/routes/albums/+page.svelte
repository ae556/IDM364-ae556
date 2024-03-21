<script>
    export let data;
    console.log("retrieved albums", data);
    const albums_map = {
        folk: [],
        rap: [],
        electronic: [],
        alternative_indie: [],
        r_b: [],
    };
    data.albums.data.forEach((album) => {
        switch (album.genre) {
            case "Folk": {
                albums_map["folk"].push(album);
                break;
            }
            case "Rap": {
                albums_map["rap"].push(album);
                break;
            }
            case "Electronic": {
                albums_map["electronic"].push(album);
                break;
            }
            case "Alternative/Indie": {
                albums_map["alternative_indie"].push(album);
                break;
            }
            case "R&B": {
                albums_map["r_b"].push(album);
                break;
            }
        }
    });
</script>

<div class="container">
    
    <div>
        <h1>E-Commerce</h1>
        <h2>Albums</h2>
    </div>
    <div>
        <article>
            <h2>Folk</h2>
            <div>
                <h3>Catalogue</h3>
                <p>Folk music</p>
                <div class="gallery">
                    <div class="inner">
                        {#each albums_map["folk"] as album}
                            <a class="album" href= {`/albums/${album.id}`}>
                                <div class="album-background">
                                    <div class="album-background-image">
                                        <img src={album.album_img_url} alt="" />
                                    </div>
                                </div>
                                <div class="album-details">
                                    <div class="album-title">
                                        <h4>{album.title}</h4>
                                    </div>
                                    <div class="album-artist">
                                        <h5>{album.artist}</h5>
                                    </div>
                                </div>
                            </a>
                        {/each}
                    </div>
                </div>
            </div>
        </article>
        <article>
            <h2>Rap</h2>
            <div>
                <h3>Catalogue</h3>
                <p>Rap</p>
                <div class="gallery">
                    <div class="inner">
                        {#each albums_map["rap"] as album}
                        <a class="album" href= {`/albums/${album.id}`}>
                            <div class="album-background">
                                <div class="album-background-image">
                                    <img src={album.album_img_url} alt="" />
                                </div>
                            </div>
                            <div class="album-details">
                                <div class="album-title">
                                    <h4>{album.title}</h4>
                                </div>
                                <div class="album-artist">
                                    <h5>{album.artist}</h5>
                                </div>
                            </div>
                        </a>
                        {/each}
                    </div>
                </div>
            </div>
        </article>
        <article>
            <h2>Electronic</h2>
            <div>
                <h3>Catalogue</h3>
                <p>Electronic</p>
                <div class="gallery">
                    <div class="inner">
                        {#each albums_map["electronic"] as album}
                        <a class="album" href= {`/albums/${album.id}`}>
                            <div class="album-background">
                                <div class="album-background-image">
                                    <img src={album.album_img_url} alt="" />
                                </div>
                            </div>
                            <div class="album-details">
                                <div class="album-title">
                                    <h4>{album.title}</h4>
                                </div>
                                <div class="album-artist">
                                    <h5>{album.artist}</h5>
                                </div>
                            </div>
                        </a>
                        {/each}
                    </div>
                </div>
            </div>
        </article>
        <article>
            <h2>Alternative/Indie</h2>
            <div>
                <h3>Catalogue</h3>
                <p>
                    In my spare time I work with clay, creating organic
                    sculptural pieces.
                </p>
                <div class="gallery">
                    <div class="inner">
                        {#each albums_map["alternative_indie"] as album}
                        <a class="album" href= {`/albums/${album.id}`}>
                            <div class="album-background">
                                <div class="album-background-image">
                                    <img src={album.album_img_url} alt="" />
                                </div>
                            </div>
                            <div class="album-details">
                                <div class="album-title">
                                    <h4>{album.title}</h4>
                                </div>
                                <div class="album-artist">
                                    <h5>{album.artist}</h5>
                                </div>
                            </div>
                        </a>
                        {/each}
                    </div>
                </div>
            </div>
        </article>
        <article>
            <h2>R&B</h2>
            <div>
                <h3>Catalogue</h3>
                <div class="gallery">
                    <div class="inner">
                        {#each albums_map["r_b"] as album}
                        <a class="album" href= {`/albums/${album.id}`}>
                            <div class="album-background">
                                <div class="album-background-image">
                                    <img src={album.album_img_url} alt="" />
                                </div>
                            </div>
                            <div class="album-details">
                                <div class="album-title">
                                    <h4>{album.title}</h4>
                                </div>
                                <div class="album-artist">
                                    <h5>{album.artist}</h5>
                                </div>
                            </div>
                        </a>
                        {/each}
                    </div>
                </div>
            </div>
        </article>
    </div>
</div>
<div class="orders-link">
    <a href="/orders">Orders</a>
</div>

<style lang="less">
    .orders-link{
        position: absolute;
        top: 2.5rem;
        right: 2.5rem;
        background-color: black;
        text-align: center;
        padding: 0.5rem 1.25rem;
        border-radius: 0.5rem;
        width: max-content;
        font-size: 1rem;
    }
    .album {
        position: relative;
    }
    .album-background {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }
    .album-background-image {
        width: 100%;
        height: 100%;
        transition: 0.2s ease-in;
    }
    .album-background-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .album-background-image:hover {
        transform: scale(2);
    }
    .album-details{
        color: #fff;
        z-index: 10;
        // position: absolute;
        // background-color: aqua;
    }
    .album-background-image:hover .album-details {
    }
    .container {
        background: #801638;
        width: 100vw;
        min-height: 100vh;
    }
    .container,
    .container > * {
        margin: 0;
        padding: 0;
        font-family: "Roboto", sans-serif;
        font-weight: normal;
    }
    * {
        transition: all 0.3s ease 0s;
    }
    /* Colours */
    ::selection {
        // background: #000 !important;
        color: #fff !important;
    }
    ::-moz-selection {
        // background: #000 !important;
        color: #fff !important;
    }
    .container > div + div {
        background: #801638;
        article:nth-child(1) {
            background: #EA7317;
        }
        article:nth-child(2) {
            background: #C5283D;
        }
        article:nth-child(3) {
            background: #224d5b;
        }
        article:nth-child(4) {
            background: #7106d6;
        }
        article:nth-child(5) {
            background: #0b6684;
        }
    }
    /* Main layout */
    html,
    .container,
    .container > div + div {
        width: 100vw;
        height: 100vh;
    }
    .container > div + div {
        list-style: none;
        position: relative;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: stretch;
        overflow: hidden;
    }
    /* Articles */
    .container > div + div article {
        flex: initial;
        width: 20%;
        height: 100%;
        text-align: center;
        color: #fff;
        text-decoration: none;
        vertical-align: bottom;
        box-sizing: border-box;
        padding: 2vh 1vw;
        position: relative;
    }
    /* Big Headings */
    .container > div:first-child {
        position: fixed;
        bottom: 8vh;
        background: #fff;
        width: 100%;
        text-align: center;
        padding: 0.5rem;
        z-index: 2;
        h1,
        h2 {
            margin: 0;
            padding: 0;
        }
    }
    /* Hover interaction */
    .container > div + div:hover article {
        flex: initial;
        width: 10%;
    }
    .container > div + div article:hover {
        width: 70%;
    }
    article > div {
        opacity: 0;
        transition: opacity 0.2s ease 0;
    }
    article:hover > div {
        opacity: 1;
        transition: opacity 0.3s ease 0.3s;
    }
    /* navigation */
    .container > div + div {
        article > h2 {
            bottom: 2.2vh;
            left: 0;
            position: absolute;
            text-align: center;
            width: 100%;
            margin: 0;
            font-size: 3vh;
        }
        &:hover article > h2 {
            bottom: 2.8vh;
            font-size: 2vh;
        }
        article:hover > h2 {
            bottom: 2.2vh;
            font-size: 3vh;
        }
    }
    /* Article layouts */
    article > div {
        text-align: left;
        width: 58vw;
        p,
        h2,
        h3 {
            margin: 0 0 1em 0;
            width: 30vw;
        }
        p {
            width: 30vw;
        }
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        text-transform: uppercase;
        text-transform: uppercase;
    }
    a {
        color: #fff;
        text-decoration: none;
        &:after {
            content: " >";
        }
        &:hover {
            text-decoration: underline;
        }
    }
    ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }
    .col-6 {
        width: 50%;
        float: left;
    }
    /* Mobile */
    @media (max-width: 900px) {
        .container > div + div article {
            padding: 2vh 3vw;
            > h2 {
                transform: rotate(90deg);
                bottom: 23vh;
                min-width: 12em;
                text-align: left;
                transform: rotate(-90deg);
                transform-origin: 0 0 0;
                opacity: 1;
            }
            &:hover > h2 {
                opacity: 0;
            }
        }
        article div {
            max-height: calc(100% - 28vh);
            overflow-y: auto;
            article div p {
                width: 50vw;
            }
        }
    }
    .gallery {
        width: 100%;
        height: 0;
        padding-top: 40%;
        box-sizing: border-box;
        position: relative;
        .inner {
            display: grid;
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
            grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
            grid-column-gap: 20px;
            grid-row-gap: 22px;
            grid-template-areas:
                "photo-1 photo-1 photo-2 photo-3 photo-3 photo-4"
                "photo-1 photo-1 photo-2 photo-3 photo-3 photo-4"
                "photo-5 photo-5 photo-2 photo-7 photo-8 photo-4"
                "photo-5 photo-5 photo-6 photo-7 photo-8 photo-9"
                "photo-5 photo-5 photo-6 photo-7 photo-8 photo-9";
            div {
                // background-color: #000;
                background-size: cover;
                background-position: center;
            }
            div:nth-child(1) {
                grid-area: photo-1;
            }
            div:nth-child(2) {
                grid-area: photo-2;
            }
            div:nth-child(3) {
                grid-area: photo-3;
            }
            div:nth-child(4) {
                grid-area: photo-4;
            }
            div:nth-child(5) {
                grid-area: photo-5;
            }
            div:nth-child(6) {
                grid-area: photo-6;
            }
            div:nth-child(7) {
                grid-area: photo-7;
            }
            div:nth-child(8) {
                grid-area: photo-8;
            }
            div:nth-child(9) {
                grid-area: photo-9;
            }
        }
    }
    .container > div + div {
    }
</style>
