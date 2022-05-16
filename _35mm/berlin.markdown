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
    <li class="photo-item aos-jeehye">
        <a class="modal-link">
            <img alt="{{ photo.alt }}" src="{{ photo.link }}">
            <p>#{{photo.tags | join: ' #'}}</p>
            {% for tag in photo.tags %}
                <p>{{tag}}</p>
                <!-- if tag within photo_tags, link to page -->
            {% endfor %}
        </a>
    </li>
    {% endfor %}
</ul>
