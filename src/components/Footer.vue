<template>
<footer>
    <div class="footer-inner">
        <span class="copy">Copyright sculpt.  </span>
        <span> | About Us |</span>
        <span> Men |</span>
        <span> Women |</span>
        <span> Plus Size |</span>
        <span> News</span>
    </div>
</footer>
</template>

<style lang="scss">
footer {
    height: 50px;
    .footer-inner {
        text-align: center;
        @media only screen and (max-width: 768px){
            padding: 25px;
        }
        span {
            line-height: 50px;
            color: #999;
            font-size: 14px;
        }
        @media only screen and (max-width: 768px){
            .copy {
                display: block;
            }
        }
    }
}
</style>