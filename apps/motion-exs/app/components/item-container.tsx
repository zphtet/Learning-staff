import React from "react";
import items from "../mock/items";
import Item from "./item";

const ItemContainer: React.FC<{ onMouseEnter: (idx: number) => void }> = ({
  onMouseEnter,
}) => {
  console.count("Items container ");
  return (
    <div className="border ">
      {items.map((item, idx) => {
        return (
          <Item
            idx={idx}
            onMouseEnter={onMouseEnter}
            {...item}
            key={item.title}
          />
        );
      })}
    </div>
  );
};

export default React.memo(ItemContainer);
