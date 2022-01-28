---
layout: 35mm
tagname: HongKong
tagurl: hongkong
---

<h2>#HongKong</h2>
<ul class="photo-list hongkong">
    {% assign photos = site.data.photos
        | where: "tags", "HongKong"
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
