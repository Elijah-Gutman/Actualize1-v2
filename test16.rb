def convert_to_coins(number)
  coins = []
  while number > 0
    if number >= 25
      count = number / 25
      count.times do
        coins << 25
      end
      number -= (25 * count)
    elsif number >= 10
      count = number / 10
      count.times do
        coins << 10
      end
      number -= (10 * count)
    elsif number >= 5
      count = number / 5
      count.times do
        coins << 5
      end
      number -= (5 * count)
    elsif number >= 1
      count = number
      count.times do
        coins << 1
      end
      number -= (count)
    end
  end
  return coins
end

class TestCoinMachine < Minitest::Test
  def test_one_returns_one_penny
    result = convert_to_coins(1)
    assert_equal [1], result
  end

  def test_10_returns_one_dime
    result = convert_to_coins(10)
    assert_equal [10], result
  end

  def test_5_returns_one_nickel
    result = convert_to_coins(5)
    assert_equal [5], result
  end

  def test_100_returns_4_quaters
    result = convert_to_coins(75)
    assert_equal [25, 25, 25], result
  end

  def test_55_returns_2quarters_1nickel
    result = convert_to_coins(55)
    assert_equal [25, 25, 5], result
  end

  def test241_returns_9quarters_1dime_1_nickel_1penny
    result = convert_to_coins(241)
    assert_equal [25, 25, 25, 25, 25, 25, 25, 25, 25, 10, 5, 1], result
  end
end
