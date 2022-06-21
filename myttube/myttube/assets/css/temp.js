$bubbles: ();
$move: ();

@for $i from 0 through 10 {
    $size: random(50, 120) / 100 * 1em;
    $start - x: random(-10, 110) * 1 %;
    $start - y: random(80, 150) * 1 %;
    $end - x: $start - x + random(-10, 10);
    $end - y: random(-400, 60) * 1 %;
    $bubbles: append($bubbles, radial - gradient(circle at center, transparent 30 %, #eef 60 %, #eef 65 %, transparent 70 %) $start - x $start - y / #{ $size } #{ $size }, comma);
    $move: append($move, $end - x $end - y, comma);
}
