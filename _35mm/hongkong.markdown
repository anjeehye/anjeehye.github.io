---
layout: 35mm
tagname: Hong Kong
tagurl: hongkong
---


<div class="page 35mm hongkong">
    <h2>#HongKong</h2>
        <ul class="photo-list">
            {% assign photos = site.data.photos
                | where: "tags", "HongKong"
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