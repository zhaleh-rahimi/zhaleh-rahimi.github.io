---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

Education
======
* Ph.D in Computer Science, McMaster University
* M. Business Administration, Alzahra University
* B.S. in Computer Software Engineering, Amirkabir University

Experience
======
* January 2022 - Present: Research Assisstant, Machine Learning and Operation Research
  * Resource allocation and Stochastic Systems Lab, Deprment of Computer and Software, McMaster University
  * Supervisor: Dr. Down

* January 2017 - April 2019: Research Assistant, Machine Learning and Healthcare Operations
  * Hasheminejad Kidney Center
  * Supervisor: Dr. Abdolvand


Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Talks
======
  <ul>{% for post in site.talks reversed %}
    {% include archive-single-talk-cv.html  %}
  {% endfor %}</ul>
  
Teaching
======
  <ul>{% for post in site.teaching reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
