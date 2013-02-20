Introduction
============

Integration of infinite scroll from Paul Irish for Plone
https://github.com/paulirish/infinite-scroll

collective.infinitescroll for Plone replaces batched views with an infinite
scroll mechanism, which appends the contents of the next page to the current
view via ajax.
It's an unintrusive javascript and doesn't alter any of the templates.

.. note::
  paulirish's infinite-scroll jQuery plugin parses the "next" button only on
  initialization and calculates the urls to retrieve the contents by
  incrementing an page counter.  Plone uses an item-offset instead of page
  numbers. For Plone a more generic approach would be better: Parsing the
  "next" buttons url on each ajax request.

.. note::
  The batch size is fixed to 10 items. You may have to change the init script
  and adapt it to your needs. TODO: automatically get the batch size or always
  use the next button's href to get the url of the next page instead of relying
  on a page counter.

Author
======

Johannes Raggam, Peter Holzer, BlueDynamics Alliance <dev@bluedynamics.com>
