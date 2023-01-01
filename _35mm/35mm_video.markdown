---
layout: 35mm
tagname: 35mm_video
tagurl: 35mm_video
---

<!-- <h2>#Berlin</h2> -->
<ul class="video-list 35mm-video">
    {% assign videos = site.data.photos_video
        | where: "display", true
    %}
    {% for video in videos %}
    <li class="video-item aos-jeehye">
        <!-- <a class="modal-link"> -->
        <div class="video-embed">
            <iframe width="100%" height="100%" style="aspect-ratio:{{ video.aspect-ratio }}" src="{{ video.link }}" frameborder="0" allowfullscreen></iframe>
        </div>
        <div class="video-info">
            <h3> {{ video.title }} </h3>
            <span> Dates: {{ video.dates }} </span>
        </div>
        <!-- </a> -->
    </li>
    {% endfor %}
</ul>
