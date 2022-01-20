---
layout: 35mm
tagname: Korea
tagurl: korea
---

<div class="page 35mm korea">
    <h2>#Korea</h2>
        <ul class="photo-list">
            {% assign photos = site.data.photos
            | where: "tags", "Korea"
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
</div>