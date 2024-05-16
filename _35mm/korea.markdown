---
layout: 35mm
tagname: Korea
tagurl: korea
---

<!-- <h2>#Korea</h2> -->
<ul class="photo-list korea">
    {% assign photos = site.data.photos_v2
        | where: "tags", "Korea"
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
