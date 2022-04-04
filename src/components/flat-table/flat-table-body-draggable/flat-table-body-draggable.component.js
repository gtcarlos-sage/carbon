import React, { useEffect, useState, useRef } from "react";
import { useDrop, DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import PropTypes from "prop-types";

import StyledIcon from "../../icon/icon.style";
import StyledFlatTableBodyDraggable from "./flat-table-body-draggable.style";
import FlatTableCell from "../flat-table-cell/flat-table-cell.component";

const DropTarget = ({ children, getOrder, ...rest }) => {
  const [isDragging, setIsDragging] = useState(false);

  const [, drop] = useDrop({
    accept: "flatTableRow",
    hover: (_, monitor) => {
      if (!isDragging && monitor.isOver()) setIsDragging(true);
    },
    drop() {
      setIsDragging(false);
      getOrder();
    },
  });

  return (
    <StyledFlatTableBodyDraggable
      data-testid="flat-table-body-draggable"
      ref={drop}
      isDragging={isDragging}
      {...rest}
    >
      {children}
    </StyledFlatTableBodyDraggable>
  );
};

DropTarget.propTypes = {
  children: PropTypes.node.isRequired,
  getOrder: PropTypes.func,
};

const FlatTableBodyDraggable = ({ children, getOrder, ...rest }) => {
  const [draggableItems, setDraggableItems] = useState(
    React.Children.toArray(children)
  );
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (!isFirstRender.current) {
      setDraggableItems(React.Children.toArray(children));
    } else {
      isFirstRender.current = false;
    }
  }, [children]);

  const findItem = (id) => {
    const draggableItem = draggableItems.filter(
      (item) => `${item.props.id}` === id
    )[0];

    return {
      draggableItem,
      index: draggableItems.indexOf(draggableItem),
    };
  };

  const moveItem = (id, atIndex) => {
    const { draggableItem, index } = findItem(id);
    if (!draggableItem) return;

    const copyOfDraggableItems = [...draggableItems];
    copyOfDraggableItems.splice(index, 1);
    copyOfDraggableItems.splice(atIndex, 0, draggableItem);
    setDraggableItems(copyOfDraggableItems);
  };

  const getItemsId = () => {
    if (!getOrder) {
      return;
    }

    const draggableItemIds = draggableItems.map(
      (draggableItem) => draggableItem.props.id
    );

    getOrder(draggableItemIds);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <DropTarget getOrder={getItemsId} {...rest}>
        {draggableItems.map((item) =>
          React.cloneElement(
            item,
            {
              id: `${item.props.id}`,
              moveItem,
              findItem,
              draggable: true,
            },
            [
              <FlatTableCell key={item.props.id}>
                <StyledIcon type="drag" />
              </FlatTableCell>,
              item.props.children,
            ]
          )
        )}
      </DropTarget>
    </DndProvider>
  );
};

FlatTableBodyDraggable.propTypes = {
  /** Callback fired when order is changed */
  getOrder: PropTypes.func,
  /** Array of FlatTableRow. */
  children: PropTypes.node.isRequired,
};

export default FlatTableBodyDraggable;
