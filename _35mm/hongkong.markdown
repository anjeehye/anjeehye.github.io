---
layout: 35mm
tagname: HongKong
tagurl: hongkong
---

<!-- <h2>#HongKong</h2> -->
<ul class="photo-list hongkong">
    {% assign photos = site.data.photos
        | where: "tags", "HongKong"
        | where: "display", true
    %}
    {% for photo in photos %}
    <li class="photo-item aos-jeehye">
        <a class="modal-link">
            <img alt="{{ photo.alt }}" src="{{ photo.link }}">
            <p>#{{photo.tags | join: ' #'}}</p>
        </a>
    </li>
    {% endfor %}
</ul>
