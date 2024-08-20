class ResinsController < ApplicationController
  def index
    @resin = Resin.first_or_initialize(current_level: 0, updated_at: Time.now)

    if params[:current_level]
      @resin.current_level = params[:current_level].to_i
      @resin.updated_at = Time.now
      @resin.save
    end

    @max_resin = 200
    @recharge_time_per_unit = 8.minutes
    @time_to_max_resin = (@max_resin - @resin.current_level) * @recharge_time_per_unit
    @max_resin_time = @resin.updated_at + @time_to_max_resin
  end
end
