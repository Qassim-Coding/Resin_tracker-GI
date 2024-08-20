require "test_helper"

class ResinsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get resins_index_url
    assert_response :success
  end
end
