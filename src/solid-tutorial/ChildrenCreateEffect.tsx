import { createSignal, For } from "solid-js";
import ColoredList from "./colored-list";
import { tgl } from "../utility/helper";

export default function ChildrenCreateEffect() {
    const [color, setColor] = createSignal("purple");

    return <>
        <ColoredList color={color()}>
            <For each={["Most", "Interesting", "Thing"]}>{item =>
                <div>{item}</div>}
            </For>
        </ColoredList>
        <button onClick={() => setColor(tgl(color(), "purple | green"))}
            >Set Color</button>
    </>;
}