---
layout: 35mm
tagname: Berlin
tagurl: berlin
---

<h2>#Berlin</h2>
<ul class="photo-list berlin">
    {% assign photos = site.data.photos
        | where: "tags", "Berlin"
        | where: "display", true
    %}
    {% for photo in photos %}
    <li class="photo-item jeehye-aos">
        <a class="post-link" disabled>
        <img alt="{{ photo.alt }}" src="{{ photo.link }}">
        </a>
    </li>
    {% endfor %}
</ul>
