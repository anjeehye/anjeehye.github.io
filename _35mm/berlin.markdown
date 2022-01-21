---
layout: 35mm
tagname: Berlin
tagurl: berlin
---

<div class="page 35mm berlin">
    <h2>#Berlin</h2>
        <ul class="photo-list">
            {% assign photos = site.data.photos
                | where: "tags", "Berlin"
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