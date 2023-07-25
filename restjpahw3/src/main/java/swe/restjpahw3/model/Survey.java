package swe.restjpahw3.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Column;
import java.util.Objects;

@Entity
@Table(name="surveys")
public class Survey {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name="first_name", nullable=false)
	private String firstName;
	
	@Column(name="last_name", nullable=false)
	private String lastName;
	
	@Column(name="streetaddress", nullable=false)
	private String streetAddress;
	
	@Column(name="city", nullable=false)
	private String city;
	
	@Column(name="state", nullable=false)
	private String state;
	
	@Column(name="zip_code", nullable=false)
	private String zipCode;
	
	@Column(name="email", nullable=false)
	private String email;

    @Column(name="telephone_num", nullable=false)
	private String telephoneNumber;
	
	@Column(name="date", nullable=false) //need to add name in survey.component.html
	private String date;
	
	@Column(name="likes", nullable=false)
	private String likes;
	
	@Column(name="interests", nullable=false)
	private String interests;
	
	@Column(name="rating", nullable=false)
	private String rating;
	
	@Column(name="comments", nullable=false) //add name in survey.component.html
	private String comments;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getStreetAddress() {
		return streetAddress;
	}

	public void setStreetAddress(String streetAddress) {
		this.streetAddress = streetAddress;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getZipCode() {
		return zipCode;
	}

	public void setZipCode(String zipCode) {
		this.zipCode = zipCode;
	}

	public String getTelephoneNumber() {
		return telephoneNumber;
	}

	public void setTelephoneNumber(String telephoneNumber) {
		this.telephoneNumber = telephoneNumber;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public String getLikes() {
		return likes;
	}

	public void setLikes(String likes) {
		this.likes = likes;
	}

	public String getInterests() {
		return interests;
	}

	public void setInterests(String interests) {
		this.interests = interests;
	}

	public String getRating() {
		return rating;
	}

	public void setRating(String rating) {
		this.rating = rating;
	}

	public String getComments() {
		return comments;
	}

	public void setComments(String comments) {
		this.comments = comments;
	}

	@Override
	public int hashCode() {
		return Objects.hash(city, comments, date, email, firstName, id, interests, lastName, likes, telephoneNumber,
				rating, state, streetAddress, zipCode);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Survey other = (Survey) obj;
		return Objects.equals(city, other.city) && Objects.equals(comments, other.comments)
				&& Objects.equals(date, other.date) && Objects.equals(email, other.email)
				&& Objects.equals(firstName, other.firstName) && id == other.id
				&& Objects.equals(interests, other.interests) && Objects.equals(lastName, other.lastName)
				&& Objects.equals(likes, other.likes) && Objects.equals(telephoneNumber, other.telephoneNumber)
				&& Objects.equals(rating, other.rating) && Objects.equals(state, other.state)
				&& Objects.equals(streetAddress, other.streetAddress) && Objects.equals(zipCode, other.zipCode);
	}

	@Override
	public String toString() {
		return "Survey [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", streetAddress="
				+ streetAddress + ", city=" + city + ", state=" + state + ", zipCode=" + zipCode
				+ ", telephoneNumber=" + telephoneNumber + ", email=" + email + ", date=" + date + ", likes=" + likes
				+ ", interests=" + interests + ", rating=" + rating + ", comments=" + comments + "]";
	}
	

}
