export default {
    customVirtualKeyboardLayers: {
        "trig": `
            <div class='rows'>
            <ul>
                <li class='bigfnbutton' data-insert='$$\\operatorname{sin}(#?)$$' data-latex='\\operatorname{sin}'></li>
                <li class='bigfnbutton' data-insert='$$\\operatorname{arcsin}(#?)$$' data-latex='\\operatorname{arcsin}'></li>
                <li class='bigfnbutton' data-insert='$$\\operatorname{cos}(#?)$$' data-latex='\\operatorname{cos}'></li>
                <li class='bigfnbutton' data-insert='$$\\operatorname{arccos}(#?)$$' data-latex='\\operatorname{arccos}'></li>
                <li class='bigfnbutton' data-insert='$$\\operatorname{tan}(#?)$$' data-latex='\\operatorname{tan}'></li>
                <li class='bigfnbutton' data-insert='$$\\operatorname{catan}(#?)$$' data-latex='\\operatorname{catan}'></li>
                <li class='bigfnbutton' data-insert='$$\\operatorname{ln}(#?)$$' data-latex='\\operatorname{ln}'></li>
                <li class='bigfnbutton' data-insert='$$\\operatorname{lg}(#?)$$' data-latex='\\operatorname{lg}'></li>
            </ul>
        </div>`,
    },
    customVirtualKeyboards: {
        'trig': {
            label: 'Trig',
            tooltip: 'Trig keyboard',
            layer: 'trig',
        },
    },
    virtualKeyboards: 'trig',
};
