def check_occurrences(s, first_letter, second_letter):
    occurrences = []
    for i in range(len(s)):
        if s[i] == first_letter:
            if i + 1 < len(s) and s[i + 1] == second_letter:
                occurrences.append(s[i:i + 2])
    return len(occurrences) == s.count(first_letter + second_letter)
