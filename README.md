# jquery.checkboxSelectableLimitter
チェックボックスに同時選択可能な最大数の制限を設ける

<script src="jquery..."></script>
<script src="jquery.checkboxSelectableLimitter.js"></script>
<script>
$(document).ready(function () {
  $('.chk').checkboxSelectableLimitter({
    limit : 3
  });
});
</script>

<input class="chk" type="checkbox">Checkbox1<br>
<input class="chk" type="checkbox">Checkbox2<br>
<input class="chk" type="checkbox">Checkbox3<br>
<input class="chk" type="checkbox">Checkbox4<br>
<input class="chk" type="checkbox">Checkbox5<br>
