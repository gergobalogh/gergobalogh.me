Feature: Sharper copy across gergobalogh.me

  Background:
    Given the site translation keys in src/i18n/ui.ts

  @walking_skeleton @real-io
  Scenario: Site builds successfully
    When I run the Astro build
    Then the build completes without errors

  @real-io @error
  Scenario: Every EN translation key exists in RO
    When I compare EN and RO translation keys
    Then every key in EN has a corresponding RO entry
    And no RO key falls back to EN

  @real-io @error
  Scenario: Every EN translation key exists in HU
    When I compare EN and HU translation keys
    Then every key in EN has a corresponding HU entry
    And no HU key falls back to EN
