Feature: Builder evaluates substance through revised site copy

  Background:
    Given I am a fellow builder scanning personal sites
    And I arrive at gergobalogh.me

  Scenario: Hero passes the 3-second test
    When I read the hero headline
    Then I should think "this person ships real things and thinks honestly"
    And I should NOT think "software engineer"

  Scenario: About section lands the thesis early
    When I read the About section
    Then "build for use, not demonstration" should land within the first sentence
    And the About should NOT read like a LinkedIn summary

  Scenario: Project cards frame, not define
    When I scan the isthisai project card
    Then I should think "I want to see this"
    And I should NOT think "I understand what this is"

  Scenario: Project CTA invites action
    When I see the clujparticipa CTA
    Then it should invite participation
    And it should NOT say "See clujparticipa"

  Scenario: Status signals life, not ticket tracking
    When I see a project status label
    Then it should signal whether the project is active
    And it should NOT read like a Jira ticket field

  Scenario: Notes intro hooks, not categorizes
    When I read the notes section intro
    Then I should feel "these might change how I think about X"
    And I should NOT feel "these are notes about X"

  Scenario: Visitor leaves with a one-sentence description
    When I finish scanning the homepage
    Then I should be able to describe this person as "builds civic tools in Cluj"
    And I should NOT describe them as "software engineer"
