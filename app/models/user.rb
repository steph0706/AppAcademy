class User < ApplicationRecord

    attr_reader :username
    
    validates :username, :password, presence: true
    validates :username, uniqueness: true

    def create

    end

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        return nil unless user
        # user.is_password?(password) ? user : nil
        user
    end

    # def is_password?(password)
    #     BCrypt
end
