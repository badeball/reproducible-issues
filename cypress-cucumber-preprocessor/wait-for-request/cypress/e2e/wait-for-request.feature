Feature: wait for request
  Scenario:
    When I visit the site
    And I intercept a POST request
    And I press send
    Then the request should be fulfilled
