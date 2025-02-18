/* eslint-disable jest/valid-expect */
import React from "react";
import Loader, { LoaderProps } from "../../../src/components/loader";
import { LoaderInsideButtonTest as LoaderInsideButton } from "../../../src/components/loader/loader-test.stories";
import { LOADER_SIZES } from "../../../src/components/loader/loader.config";
import { loader, loaderInsideButton } from "../../locators/loader";
import { positionOfElement } from "../../support/helper";
import CypressMountWithProviders from "../../support/component-helper/cypress-mount";
import {
  checkGoldenOutline,
  assertCssValueIsApproximately,
} from "../../support/component-helper/common-steps";

context("Test for Loader component", () => {
  describe("check props for Loader component", () => {
    it.each([
      [LOADER_SIZES[0], 12, 6],
      [LOADER_SIZES[1], 16, 8],
      [LOADER_SIZES[2], 20, 8],
    ] as [LoaderProps["size"], number, number][])(
      "should render Loader using %s as size",
      (size, heightAndWidth, margin) => {
        CypressMountWithProviders(<Loader size={size} />);

        loader(positionOfElement("first")).then(($el) => {
          assertCssValueIsApproximately($el, "height", heightAndWidth);
          assertCssValueIsApproximately($el, "width", heightAndWidth);
          assertCssValueIsApproximately($el, "margin-right", margin);
          expect($el.css("animation-delay")).to.equals("0s");
        });
        loader(positionOfElement("second")).then(($el) => {
          assertCssValueIsApproximately($el, "height", heightAndWidth);
          assertCssValueIsApproximately($el, "width", heightAndWidth);
          assertCssValueIsApproximately($el, "margin-right", margin);
          expect($el.css("animation-delay")).to.equals("0.2s");
        });
        loader(positionOfElement("third")).then(($el) => {
          assertCssValueIsApproximately($el, "height", heightAndWidth);
          assertCssValueIsApproximately($el, "width", heightAndWidth);
          expect($el.css("margin-right")).to.equals("0px");
          expect($el.css("animation-delay")).to.equals("0.4s");
        });
      }
    );

    it.each([
      [LOADER_SIZES[0], 100],
      [LOADER_SIZES[1], 116],
      [LOADER_SIZES[2], 128],
    ] as [LoaderProps["size"], number][])(
      "should render Loader using %s as size in Button",
      (size, width) => {
        CypressMountWithProviders(<LoaderInsideButton size={size} />);

        loaderInsideButton().then(($el) => {
          expect($el.css("height")).to.equals("40px");
          assertCssValueIsApproximately($el, "width", width);
        });
      }
    );

    it("should render Loader inside the Button component with correct color", () => {
      CypressMountWithProviders(<LoaderInsideButton />);

      const color = "rgb(255, 255, 255)";

      loader(positionOfElement("first"))
        .should("be.visible")
        .and("have.css", "color", color);
      loader(positionOfElement("second"))
        .should("be.visible")
        .and("have.css", "color", color);
      loader(positionOfElement("third"))
        .should("be.visible")
        .and("have.css", "color", color);
    });

    it("should render Loader with aria-label prop", () => {
      CypressMountWithProviders(<Loader aria-label="cypress-aria" />);

      loader(positionOfElement("first"))
        .parent()
        .should("have.attr", "aria-label", "cypress-aria");
    });

    it("should render Loader with isActive prop set to false", () => {
      CypressMountWithProviders(<LoaderInsideButton isActive={false} />);

      const color = "rgb(255, 255, 255)";

      loader(positionOfElement("first")).should(
        "have.css",
        "background-color",
        color
      );
      loader(positionOfElement("second")).should(
        "have.css",
        "background-color",
        color
      );
      loader(positionOfElement("third")).should(
        "have.css",
        "background-color",
        color
      );
    });

    it("should render Loader inside the Button component and be able to focus it", () => {
      CypressMountWithProviders(<LoaderInsideButton />);

      loaderInsideButton()
        .focus()
        .then(($el) => {
          checkGoldenOutline($el);
        });
    });
  });

  describe("Accessibility tests for Loader component", () => {
    it("should pass accessibilty tests for Loader default story", () => {
      CypressMountWithProviders(<Loader />);

      cy.checkAccessibility();
    });
    it("should pass accessibility tests for loading state", () => {
      CypressMountWithProviders(<LoaderInsideButton />);

      cy.checkAccessibility();
    });
  });

  it("should render with expected border radius styling", () => {
    CypressMountWithProviders(<Loader />);
    loader(positionOfElement("first")).should(
      "have.css",
      "border-radius",
      "50%"
    );
  });
});
